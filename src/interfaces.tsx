export interface OnDataChangeParam {
  speakerDeviceId?: string
  microphoneDeviceId?: string
  microphoneVolume?: number
  soundEffectVolume?: number
  musicVolume?: number
}

export interface ReactDjSettingProps {
  buttonStyle?: React.CSSProperties
  buttonName?: React.ReactNode
  buttonClassName?: string
  speakerDeviceId?: string
  microphoneDeviceId?: string
  microphoneVolume?: number
  soundEffectVolume?: number
  soundEffectTestSrc: string
  musicVolume?: number
  musicTestSrc: string
  shouldCloseOnOverlayClick?: boolean
  onChange?: ({
    speakerDeviceId,
    microphoneDeviceId,
    microphoneVolume,
    soundEffectVolume,
    musicVolume,
  }: OnDataChangeParam) => void
}

export interface IconCloseProps {
  closeModal: () => void
}

export interface SvgProps {
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler<SVGSVGElement>
}

export interface MicrophoneProps {
  microphoneVolume: number
  speakerDeviceId: string
  microphoneDeviceId?: string
  onDataChange: ({
    microphoneVolume,
    microphoneDeviceId,
  }: OnDataChangeParam) => void
}

export interface MusicProps {
  musicVolume: number
  speakerDeviceId: string
  musicTestSrc: string
  onDataChange: ({ musicVolume }: OnDataChangeParam) => void
}

export interface SoundEffectProps {
  soundEffectVolume: number
  speakerDeviceId: string
  soundEffectTestSrc: string
  onDataChange: ({ soundEffectVolume }: OnDataChangeParam) => void
}

export interface VolumeControlProps {
  muted: boolean
  volume: number
  setVolume: React.Dispatch<React.SetStateAction<number>>
  onVolumeChange?: (volume: number) => void
}
