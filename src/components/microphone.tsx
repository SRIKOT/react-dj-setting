import React, { useCallback, useEffect, useState, useRef } from "react"
import { OnDataChangeParam } from "../interfaces"
import VolumeControl from "./volume-control"

interface MicrophoneProps {
  microphoneVolume: number
  speakerDeviceId: string
  microphoneDeviceId?: string
  onDataChange: ({
    microphoneVolume,
    microphoneDeviceId,
  }: OnDataChangeParam) => void
}

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
    let chunks: Blob[] = []
    mr.ondataavailable = function (e) {
      chunks.push(e.data)
    }
    mr.onstop = function () {
      const blob = new Blob(chunks, { type: "audio/mpeg" })
      if (audioUrl) window.URL.revokeObjectURL(audioUrl)
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

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <label>Microphone:</label>
        <select
          onChange={(e) => onChangeMicrophone(e.target.value)}
          value={microphoneDeviceId2}
        >
          {audioInputs.map((d) => (
            <option key={d.deviceId} value={d.deviceId}>
              {d.label}
            </option>
          ))}
        </select>
        {audioUrl ? (
          <button type="button" onClick={onTestMicrophone}>
            play
          </button>
        ) : mediaRecorder ? (
          <button type="button" onClick={onStopRecordMicrophone}>
            Speaking...
          </button>
        ) : (
          <button type="button" onClick={onStartRecordMicrophone}>
            Test
          </button>
        )}
        <audio ref={audioMicrophoneRef}></audio>
      </div>
      <VolumeControl
        volume={microphoneVolume2}
        muted={microphoneMute}
        setVolume={setMicrophoneVolume2}
        setMuted={setMicrophoneMute}
        onVolumeChange={(volume) => onUpdateVolume(volume)}
      />
    </div>
  )
}

export default Microphone
