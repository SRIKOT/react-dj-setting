import React, { useCallback, useEffect, useState, useRef } from "react"
import { IconPauseFilled, IconSpeakerOff, IconSpeakerOn } from "../assets/svg"
import VolumeControl from "../components/volume-control"
import { SoundEffectProps } from "../interfaces"
import { Styled } from "../styles/styled"

const SoundEffect = ({
  soundEffectVolume = 0.5,
  speakerDeviceId,
  soundEffectTestSrc,
  onDataChange,
}: SoundEffectProps) => {
  const [soundEffectVolume2, setSoundEffectVolume2] = useState<number>(0)
  const [soundEffectMute, setSoundEffectMute] = useState<boolean>(false)
  const audioSoundEffectRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  const onUpdateVolume = (volume: number) => {
    setSoundEffectVolume2(volume)
    onDataChange({
      soundEffectVolume: volume,
    })
  }

  const onTestSoundEffect = useCallback(() => {
    if (!audioSoundEffectRef.current) {
      console.error("audio test ref is not found!")
      return
    }

    audioSoundEffectRef.current.src = soundEffectTestSrc
    audioSoundEffectRef.current.play()
  }, [soundEffectTestSrc, audioSoundEffectRef.current])

  const onMute = (value: boolean) => {
    setSoundEffectMute(value)
  }

  const updateSkinId = async (deviceId: string) => {
    if (!audioSoundEffectRef.current) {
      console.error("some audio ref not found to update skinId")
      return
    }

    try {
      await audioSoundEffectRef.current // @ts-ignore
        .setSinkId(deviceId)
    } catch (error) {
      console.error("updateSkinId fail!", error)
    }
  }

  useEffect(() => {
    if (speakerDeviceId) {
      updateSkinId(speakerDeviceId)
    }
  }, [speakerDeviceId])

  useEffect(() => {
    onUpdateVolume(soundEffectVolume)
  }, [soundEffectVolume])

  useEffect(() => {
    if (audioSoundEffectRef.current) {
      audioSoundEffectRef.current.volume = soundEffectVolume2
    }
  }, [soundEffectVolume2, audioSoundEffectRef.current])

  useEffect(() => {
    if (audioSoundEffectRef.current) {
      audioSoundEffectRef.current.onplaying = () => {
        setIsPlaying(true)
      }

      audioSoundEffectRef.current.onended = () => {
        setIsPlaying(false)
      }
    }
  }, [audioSoundEffectRef.current])

  return (
    <Styled.LabelBox>
      <Styled.Label>Sound effect:</Styled.Label>
      <Styled.VolumeBox>
        <Styled.IconSvgFillColor>
          <IconSpeakerOff onClick={() => onMute(true)} />
        </Styled.IconSvgFillColor>
        <VolumeControl
          volume={soundEffectVolume2}
          muted={soundEffectMute}
          setVolume={setSoundEffectVolume2}
          onVolumeChange={(volume) => onUpdateVolume(volume)}
        />
        <Styled.IconSvgFillColor>
          <IconSpeakerOn onClick={() => onMute(false)} />
        </Styled.IconSvgFillColor>
      </Styled.VolumeBox>
      <Styled.ButtonBox>
        {isPlaying ? (
          <Styled.ButtonPlaying type="button">
            <IconPauseFilled />
            Playing
          </Styled.ButtonPlaying>
        ) : (
          <Styled.ButtonTestFill type="button" onClick={onTestSoundEffect}>
            <IconSpeakerOn />
            Test
          </Styled.ButtonTestFill>
        )}
      </Styled.ButtonBox>
      <audio ref={audioSoundEffectRef}></audio>
    </Styled.LabelBox>
  )
}

export default SoundEffect
