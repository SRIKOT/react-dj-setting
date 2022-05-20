import React, { useEffect, useState, useRef } from "react"
import Modal from "react-modal"
import Microphone from "./components/microphone"
import Music from "./components/music"
import SoundEffect from "./components/sound-effect"
import { OnDataChangeParam } from "./interfaces"
Modal.setAppElement("#root")
interface ReactDjSettingProps {
  buttonStyle?: React.CSSProperties
  buttonName?: React.ReactNode
  speakerDeviceId?: string
  microphoneDeviceId?: string
  microphoneVolume?: number
  soundEffectVolume?: number
  soundEffectTestSrc: string
  musicVolume?: number
  musicTestSrc: string
  onChange?: ({
    speakerDeviceId,
    microphoneDeviceId,
    microphoneVolume,
    soundEffectVolume,
    musicVolume,
  }: OnDataChangeParam) => void
}

const ReactDjSetting = ({
  buttonStyle,
  buttonName,
  speakerDeviceId,
  microphoneDeviceId,
  microphoneVolume = 0.5,
  soundEffectVolume = 0.5,
  soundEffectTestSrc,
  musicVolume = 0.5,
  musicTestSrc,
  onChange,
}: ReactDjSettingProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [audioOutputs, setAudioOutputs] = useState<MediaDeviceInfo[]>([])
  const [speakerDeviceId2, setSpeakerDeviceId2] = useState<string>("")
  const audioSpeakerRef = useRef<HTMLAudioElement>(null)
  const [settingData, setSettingData] = useState<OnDataChangeParam>()

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const onSave = () => {
    if (settingData) {
      onChange?.(settingData)
    }
    
    closeModal()
  }

  const onDataChange = (newState: OnDataChangeParam) => {
    setSettingData((prevState) => ({ ...prevState, ...newState }))
  }

  const onUpdateSpeaker = (deviceId: string) => {
    setSpeakerDeviceId2(deviceId)
    onDataChange({
      speakerDeviceId: deviceId,
    })
  }
  const updateSkinId = async (deviceId: string) => {
    if (!audioSpeakerRef.current) {
      console.error("some audio ref not found to update skinId")
      return
    }

    try {
      await audioSpeakerRef.current // @ts-ignore
        .setSinkId(deviceId)
    } catch (error) {
      console.error("updateSkinId fail!", error)
    }
  }

  useEffect(() => {
    if (isOpen) {
      if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
        console.log("enumerateDevices() not supported.")
        return
      }

      navigator.mediaDevices
        .enumerateDevices()
        .then(async function (devices) {
          const audiooutputs = devices.filter((d) => d.kind === "audiooutput")
          setAudioOutputs(audiooutputs)

          if (!audiooutputs.length) {
            console.error("microphone input or speaker input is required!")
            return
          }

          //set default output device
          if (!speakerDeviceId) {
            onUpdateSpeaker(audiooutputs[0].deviceId)
          } else {
            onUpdateSpeaker(speakerDeviceId)
          }
        })
        .catch(function (err) {
          console.log(err.name + ": " + err.message)
        })
    }
  }, [isOpen, speakerDeviceId])

  useEffect(() => {
    if (speakerDeviceId2) {
      updateSkinId(speakerDeviceId2)
    }
  }, [speakerDeviceId2])

  return (
    <div>
      <button style={buttonStyle} onClick={openModal}>
        {buttonName}
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            zIndex: 1000,
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            borderRadius: 8,
            width: 750,
            height: 645,
          },
        }}
      >
        <IconClose closeModal={closeModal} />
        <Header />
        <Microphone
          microphoneVolume={microphoneVolume}
          microphoneDeviceId={microphoneDeviceId}
          speakerDeviceId={speakerDeviceId2}
          onDataChange={onDataChange}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <label>Speaker:</label>
          <select
            onChange={(e) => onUpdateSpeaker(e.target.value)}
            value={speakerDeviceId}
          >
            {audioOutputs.map((d) => (
              <option key={d.deviceId} value={d.deviceId}>
                {d.label}
              </option>
            ))}
          </select>
          <audio ref={audioSpeakerRef}></audio>
        </div>
        <SoundEffect
          soundEffectVolume={soundEffectVolume}
          speakerDeviceId={speakerDeviceId2}
          soundEffectTestSrc={soundEffectTestSrc}
          onDataChange={onDataChange}
        />
        <Music
          musicVolume={musicVolume}
          speakerDeviceId={speakerDeviceId2}
          musicTestSrc={musicTestSrc}
          onDataChange={onDataChange}
        />
        <button onClick={onSave}>Save</button>
      </Modal>
    </div>
  )
}

interface IconCloseProps {
  closeModal: () => void
}

const IconClose = ({ closeModal }: IconCloseProps) => {
  return (
    <div
      style={{
        float: "right",
        cursor: "pointer",
      }}
    >
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={closeModal}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.17164 4.42182C3.89828 4.69519 3.89828 5.1384 4.17164 5.41177L19.255 20.4951C19.5283 20.7685 19.9716 20.7685 20.2449 20.4951C20.5183 20.2217 20.5183 19.7785 20.2449 19.5052L5.1616 4.42182C4.88823 4.14846 4.44501 4.14846 4.17164 4.42182Z"
          fill="#9E9E9E"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.3281 4.42182C20.6015 4.69519 20.6015 5.1384 20.3281 5.41177L5.24478 20.4951C4.97141 20.7685 4.5282 20.7685 4.25483 20.4951C3.98146 20.2217 3.98146 19.7785 4.25483 19.5052L19.3382 4.42182C19.6115 4.14846 20.0547 4.14846 20.3281 4.42182Z"
          fill="#9E9E9E"
        />
      </svg>
    </div>
  )
}

const Header = () => {
  return (
    <h1
      style={{
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "28px",
        lineHeight: "46px",
        textAlign: "center",
      }}
    >
      Setting
    </h1>
  )
}

export default ReactDjSetting
