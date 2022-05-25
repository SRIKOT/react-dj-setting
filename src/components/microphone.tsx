import React, { useCallback, useEffect, useState, useRef } from "react"
import {
  IconDropdown,
  IconMicrophoneOffOutline,
  IconMicrophoneOutline,
  IconPauseFilled,
  IconPlayFilled,
  IconReset,
} from "../assets/svg"
import { MicrophoneProps } from "../interfaces"
import { Styled } from "../styles/styled"
import VolumeControl from "./volume-control"

const Microphone = ({
  microphoneVolume,
  speakerDeviceId,
  microphoneDeviceId,
  onDataChange,
}: MicrophoneProps) => {
  const [audioInputs, setAudioInputs] = useState<MediaDeviceInfo[]>([])
  const [microphoneVolume2, setMicrophoneVolume2] = useState<number>(0)
  const [microphoneMute, setMicrophoneMute] = useState<boolean>(false)
  const [microphoneDeviceId2, setMicrophoneDeviceId2] = useState<string>()
  const audioMicrophoneRef = useRef<HTMLAudioElement>(null)
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder>()
  const [audioUrl, setAudioUrl] = useState<string>("")
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  const onUpdateDeviceId = (deviceId: string) => {
    setMicrophoneDeviceId2(deviceId)
    onDataChange({
      microphoneDeviceId: deviceId,
    })
  }

  const onUpdateVolume = useCallback(
    (volume: number) => {
      setMicrophoneVolume2(volume)
      onDataChange({
        microphoneVolume: volume,
      })

      if (audioMicrophoneRef.current) {
        audioMicrophoneRef.current.volume = volume
      }
    },
    [audioMicrophoneRef.current]
  )

  const onTestMicrophone = useCallback(() => {
    if (!audioMicrophoneRef.current) {
      console.error("audio test ref is not found!")
      return
    }

    audioMicrophoneRef.current.src = audioUrl
    audioMicrophoneRef.current.play()
  }, [audioMicrophoneRef.current, audioUrl])

  const onStartRecordMicrophone = useCallback(async () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.error("getUserMedia not supported on your browser!")
      return
    }

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    const mr = new MediaRecorder(stream)
    mr.start()
    const chunks: Blob[] = []
    mr.ondataavailable = function (e) {
      chunks.push(e.data)
    }
    mr.onstop = function () {
      const blob = new Blob(chunks, { type: "audio/mpeg" })
      const url = window.URL.createObjectURL(blob)
      setAudioUrl(url)
    }

    setMediaRecorder(mr)
  }, [audioUrl])

  const onStopRecordMicrophone = () => {
    if (!mediaRecorder) return
    mediaRecorder.stop()
    setMediaRecorder(undefined)
  }

  const onChangeMicrophone = (deviceId: string) => {
    onUpdateDeviceId(deviceId)
  }

  const onMute = (value: boolean) => {
    setMicrophoneMute(value)
  }

  const onReset = useCallback(() => {
    if (audioUrl) window.URL.revokeObjectURL(audioUrl)
    setAudioUrl("")
  }, [audioUrl])

  const updateSkinId = async (deviceId: string) => {
    if (!audioMicrophoneRef.current) {
      console.error("some audio ref not found to update skinId")
      return
    }

    try {
      await audioMicrophoneRef.current // @ts-ignore
        .setSinkId(deviceId)
    } catch (error) {
      console.error("updateSkinId fail!", error)
    }
  }

  useEffect(() => {
    onUpdateVolume(microphoneVolume)
  }, [microphoneVolume])

  useEffect(() => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
      console.log("enumerateDevices() not supported.")
      return
    }

    navigator.mediaDevices
      .enumerateDevices()
      .then(async function (devices) {
        const audioinputs = devices.filter((d) => d.kind === "audioinput")
        setAudioInputs(audioinputs)

        if (!audioinputs.length) {
          console.error("microphone input is required!")
          return
        }

        //set default input device
        if (!microphoneDeviceId) {
          onUpdateDeviceId(audioinputs[0].deviceId)
        } else {
          onUpdateDeviceId(microphoneDeviceId)
        }
      })
      .catch(function (err) {
        console.log(err.name + ": " + err.message)
      })
  }, [microphoneDeviceId])

  useEffect(() => {
    updateSkinId(speakerDeviceId)
  }, [speakerDeviceId])

  useEffect(() => {
    if (audioMicrophoneRef.current) {
      audioMicrophoneRef.current.onplaying = () => {
        setIsPlaying(true)
      }

      audioMicrophoneRef.current.onended = () => {
        setIsPlaying(false)
      }
    }
  }, [audioMicrophoneRef.current])

  return (
    <div>
      <Styled.LabelBox>
        <Styled.Label>Microphone:</Styled.Label>
        <Styled.SelectWrapper>
          <Styled.Select
            onChange={(e) => onChangeMicrophone(e.target.value)}
            value={microphoneDeviceId2}
          >
            {audioInputs.map((d) => (
              <option key={d.deviceId} value={d.deviceId}>
                {d.label}
              </option>
            ))}
          </Styled.Select>
          <IconDropdown />
        </Styled.SelectWrapper>
        <Styled.ButtonBox>
          {audioUrl ? (
            <Styled.MicrophonePlayBox>
              <IconReset onClick={onReset} style={{ cursor: "pointer" }} />
              {isPlaying ? (
                <Styled.ButtonPlaying type="button">
                  <IconPauseFilled />
                  Playing
                </Styled.ButtonPlaying>
              ) : (
                <Styled.ButtonTestFill type="button" onClick={onTestMicrophone}>
                  <IconPlayFilled />
                  Play
                </Styled.ButtonTestFill>
              )}
            </Styled.MicrophonePlayBox>
          ) : mediaRecorder ? (
            <Styled.ButtonSpeaker
              type="button"
              onClick={onStopRecordMicrophone}
            >
              <IconMicrophoneOutline /> Speaking...
            </Styled.ButtonSpeaker>
          ) : (
            <Styled.ButtonTestStroke
              type="button"
              onClick={onStartRecordMicrophone}
            >
              <IconMicrophoneOutline /> Test
            </Styled.ButtonTestStroke>
          )}
        </Styled.ButtonBox>
        <audio ref={audioMicrophoneRef}></audio>
      </Styled.LabelBox>
      <Styled.LabelBox>
        <Styled.Label></Styled.Label>
        <Styled.MicrophoneVolumeBox>
          <Styled.IconSvgFillColor>
            <IconMicrophoneOffOutline onClick={() => onMute(true)} />
          </Styled.IconSvgFillColor>
          <VolumeControl
            volume={microphoneVolume2}
            muted={microphoneMute}
            setVolume={setMicrophoneVolume2}
            onVolumeChange={(volume) => onUpdateVolume(volume)}
          />
          <Styled.IconSvgStrokeColor>
            <IconMicrophoneOutline onClick={() => onMute(false)} />
          </Styled.IconSvgStrokeColor>
        </Styled.MicrophoneVolumeBox>
      </Styled.LabelBox>
    </div>
  )
}

export default Microphone
