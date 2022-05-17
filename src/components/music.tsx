import React, { useCallback, useEffect, useState, useRef } from "react"
import VolumeControl from "../components/volume-control"
import { OnDataChangeParam } from "../interfaces"

interface MusicProps {
  musicVolume: number
  speakerDeviceId: string
  musicTestSrc: string
  onDataChange: ({ musicVolume }: OnDataChangeParam) => void
}

const Music = ({
  musicVolume = 0.5,
  speakerDeviceId,
  musicTestSrc,
  onDataChange,
}: MusicProps) => {
  const [musicVolume2, setMusicVolume2] = useState<number>(0)
  const [musicMute, setMusicMute] = useState<boolean>(false)
  const audioMusicRef = useRef<HTMLAudioElement>(null)

  const onUpdateVolume = (volume: number) => {
    setMusicVolume2(volume)
    onDataChange({
      musicVolume: volume,
    })
  }

  const onTestMusic = useCallback(() => {
    if (!audioMusicRef.current) {
      console.error("audio test ref is not found!")
      return
    }

    audioMusicRef.current.src = musicTestSrc
    audioMusicRef.current.play()
  }, [musicTestSrc, audioMusicRef.current])

  const updateSkinId = async (deviceId: string) => {
    if (!audioMusicRef.current) {
      console.error("some audio ref not found to update skinId")
      return
    }

    try {
      await audioMusicRef.current // @ts-ignore
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
    onUpdateVolume(musicVolume)
  }, [musicVolume])

  useEffect(() => {
    if (audioMusicRef.current) {
      audioMusicRef.current.volume = musicVolume2
    }
  }, [musicVolume2, audioMusicRef.current])

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <label>Music:</label>
      <VolumeControl
        volume={musicVolume2}
        muted={musicMute}
        setVolume={setMusicVolume2}
        setMuted={setMusicMute}
        onVolumeChange={(volume) => onUpdateVolume(volume)}
      />
      <button type="button" onClick={onTestMusic}>
        Test
      </button>
      <audio ref={audioMusicRef}></audio>
    </div>
  )
}

export default Music
