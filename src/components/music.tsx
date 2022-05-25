import React, { useCallback, useEffect, useState, useRef } from "react"
import { IconPauseFilled, IconSpeakerOff, IconSpeakerOn } from "../assets/svg"
import VolumeControl from "../components/volume-control"
import { MusicProps } from "../interfaces"
import { Styled } from "../styles/styled"

const Music = ({
  musicVolume = 0.5,
  speakerDeviceId,
  musicTestSrc,
  onDataChange,
}: MusicProps) => {
  const [musicVolume2, setMusicVolume2] = useState<number>(0)
  const [musicMute, setMusicMute] = useState<boolean>(false)
  const audioMusicRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

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

  const onMute = (value: boolean) => {
    setMusicMute(value)
  }

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

  useEffect(() => {
    if (audioMusicRef.current) {
      audioMusicRef.current.onplaying = () => {
        setIsPlaying(true)
      }

      audioMusicRef.current.onended = () => {
        setIsPlaying(false)
      }
    }
  }, [audioMusicRef.current])

  return (
    <Styled.LabelBox>
      <Styled.Label>Music:</Styled.Label>
      <Styled.VolumeBox>
        <Styled.IconSvgFillColor>
          <IconSpeakerOff onClick={() => onMute(true)} />
        </Styled.IconSvgFillColor>
        <VolumeControl
          volume={musicVolume2}
          muted={musicMute}
          setVolume={setMusicVolume2}
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
          <Styled.ButtonTestFill type="button" onClick={onTestMusic}>
            <IconSpeakerOn />
            Test
          </Styled.ButtonTestFill>
        )}
      </Styled.ButtonBox>
      <audio ref={audioMusicRef}></audio>
    </Styled.LabelBox>
  )
}

export default Music
