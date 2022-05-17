import React, { useCallback, useEffect, useState, useRef } from "react"
import VolumeControl from "../components/volume-control"
import { OnDataChangeParam } from "../interfaces"

interface SoundEffectProps {
  soundEffectVolume: number
  speakerDeviceId: string
  soundEffectTestSrc: string
  onDataChange: ({ soundEffectVolume }: OnDataChangeParam) => void
}

const SoundEffect = ({
  soundEffectVolume = 0.5,
  speakerDeviceId,
  soundEffectTestSrc,
  onDataChange,
}: SoundEffectProps) => {
  const [soundEffectVolume2, setSoundEffectVolume2] = useState<number>(0)
  const [soundEffectMute, setSoundEffectMute] = useState<boolean>(false)
  const audioSoundEffectRef = useRef<HTMLAudioElement>(null)

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

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <label>Sound effect:</label>
      <VolumeControl
        volume={soundEffectVolume2}
        muted={soundEffectMute}
        setVolume={setSoundEffectVolume2}
        setMuted={setSoundEffectMute}
        onVolumeChange={(volume) => onUpdateVolume(volume)}
      />
      <button type="button" onClick={onTestSoundEffect}>
        Test
      </button>
      <audio ref={audioSoundEffectRef}></audio>
    </div>
  )
}

export default SoundEffect
