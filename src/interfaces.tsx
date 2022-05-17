import { MouseEventHandler } from "react"

export interface ButtonProps {
  color?: "error" | ""
  onClick?: MouseEventHandler<HTMLButtonElement>
  ref?: any
}

export interface OnDataChangeParam {
  speakerDeviceId?: string
  microphoneDeviceId?: string
  microphoneVolume?: number
  soundEffectVolume?: number
  musicVolume?: number
}
