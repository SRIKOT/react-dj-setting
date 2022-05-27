import React, { useEffect, useState, useRef } from "react"
import Modal from "react-modal"
import { IconCloseSvg, IconDropdown } from "./assets/svg"
import Microphone from "./components/microphone"
import Music from "./components/music"
import SoundEffect from "./components/sound-effect"
import {
  IconCloseProps,
  OnDataChangeParam,
  ReactDjSettingProps,
} from "./interfaces"
import { Styled } from "./styles/styled"
Modal.setAppElement("#root")

const ReactDjSetting = ({
  buttonStyle,
  buttonName,
  buttonClassName,
  speakerDeviceId,
  microphoneDeviceId,
  microphoneVolume = 0.5,
  soundEffectVolume = 0.5,
  soundEffectTestSrc,
  musicVolume = 0.5,
  musicTestSrc,
  shouldCloseOnOverlayClick = true,
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
      <button
        style={buttonStyle}
        className={buttonClassName}
        onClick={openModal}
      >
        {buttonName}
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
        style={{
          overlay: {
            zIndex: 1000,
            background: "rgba(0, 0, 0, 0.45)",
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
            position: "relative",
            background: "#FFFFFF",
          },
        }}
      >
        <Styled.Container>
          <IconClose closeModal={closeModal} />
          <Styled.Header>Setting</Styled.Header>
          <Microphone
            microphoneVolume={microphoneVolume}
            microphoneDeviceId={microphoneDeviceId}
            speakerDeviceId={speakerDeviceId2}
            onDataChange={onDataChange}
          />
          <Styled.LabelBox>
            <Styled.Label>Speaker:</Styled.Label>
            <Styled.SelectWrapper>
              <Styled.Select
                onChange={(e) => onUpdateSpeaker(e.target.value)}
                value={speakerDeviceId2}
              >
                {audioOutputs.map((d) => (
                  <option key={d.deviceId} value={d.deviceId}>
                    {d.label}
                  </option>
                ))}
              </Styled.Select>
              <IconDropdown />
            </Styled.SelectWrapper>
            <Styled.ButtonBox></Styled.ButtonBox>
            <audio ref={audioSpeakerRef}></audio>
          </Styled.LabelBox>
          <Styled.BorderSection />
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
          <Styled.ButtonSave onClick={onSave}>
            <Styled.ButtonSaveText>Save</Styled.ButtonSaveText>
          </Styled.ButtonSave>
        </Styled.Container>
      </Modal>
    </div>
  )
}

const IconClose = ({ closeModal }: IconCloseProps) => {
  return (
    <Styled.IconClose>
      <Styled.ButtonIcon onClick={closeModal}>
        <IconCloseSvg />
      </Styled.ButtonIcon>
    </Styled.IconClose>
  )
}

export default ReactDjSetting
