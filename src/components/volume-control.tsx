import React, { useEffect, memo, useState } from "react"
import { VolumeControlProps } from "../interfaces"
import { Styled } from "../styles/styled"

const VolumeControl = ({
  muted,
  volume,
  setVolume,
  onVolumeChange,
}: VolumeControlProps) => {
  const [previousVolume, sePeviousVolume] = useState<number>()
  useEffect(() => {
    onVolumeChange?.(volume)
  }, [volume])

  useEffect(() => {
    if (muted) {
      setVolume(0)
      sePeviousVolume(volume)
    } else {
      if (previousVolume) {
        setVolume(previousVolume)
      }
    }
  }, [muted])

  return (
    <Styled.VolumeControlContainer>
      <input
        style={{ cursor: "pointer" }}
        type="range"
        min={0}
        max={1}
        step={0.1}
        value={volume}
        onChange={(e) => setVolume(Number(e.target.value))}
      />
    </Styled.VolumeControlContainer>
  )
}

export default memo(VolumeControl)
