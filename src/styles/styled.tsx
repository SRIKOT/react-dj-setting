import styled from "styled-components"

const Container = styled.div`
  width: 526px;
  margin-left: auto;
  margin-right: auto;
`

const LabelBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  width: 100%;
`

const ButtonBox = styled.div`
  width: 114px;
  display: flex;
  justify-content: center;
`

const Label = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #121212;
  width: 20%;
`

const Header = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 46px;
  text-align: center;
  color: #121212;
  padding-top: 32px;
  padding-bottom: 50px;
`

const IconClose = styled.div`
  cursor: pointer;
  position: absolute;
  right: 16px;
`

const IconSvgFillColor = styled.div`
  display: flex;
  align-items: center;
  svg {
    cursor: pointer;
    path {
      fill: #9e9e9e;
    }
  }
`

const IconSvgStrokeColor = styled.div`
  display: flex;
  align-items: center;
  svg {
    cursor: pointer;
    path {
      stroke: #9e9e9e;
    }
  }
`

const ButtonIcon = styled.button`
  border: 0;
  line-height: 1;
  cursor: pointer;
  display: inline-block;
  background-color: #ffffff;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  padding 0;
`

const ButtonSave = styled.button`
  width: 158px;
  height: 46px;
  background: #6699ff;
  border-radius: 100px;
  border: 0;
  line-height: 1;
  cursor: pointer;
  padding: 11px 20px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
  margin-bottom: 40px;
  &:hover {
    background: #527acc;
  }
`

const ButtonSaveText = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
`

const ButtonSpeaker = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4.5px 12px;
  gap: 4px;
  width: 114px;
  height: 32px;
  background: #6699ff;
  border: 1px solid #6699ff;
  border-radius: 100px;
  background: #6699ff;
  cursor: pointer;

  /* text */
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  color: #f0f1f2;

  svg {
    path {
      stroke: #f0f1f2;
    }
  }
`

const ButtonPlaying = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4.5px 12px;
  gap: 4px;
  width: 90px;
  height: 32px;
  background: #6699ff;
  border: 1px solid #6699ff;
  border-radius: 100px;

  /* text */
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  color: #f0f1f2;

  svg {
    path {
      stroke: #f0f1f2;
    }
  }
`

const ButtonTest = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 4.5px 12px;
  gap: 4px;
  height: 32px;
  left: 16px;
  top: 14.62px;
  border: 1px solid #e0e0e0;
  border-radius: 100px;
  background: #ffffff;
  cursor: pointer;

  /* text */
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  color: #6699ff;
`

const ButtonTestFill = styled(ButtonTest)`
  svg {
    path {
      fill: #6699ff;
    }
  }
  &:hover {
    background: #527acc;
    border: 1px solid #527acc;
    color: #f0f1f2;
    svg {
      path {
        fill: #f0f1f2;
      }
    }
  }
`

const ButtonTestStroke = styled(ButtonTest)`
  svg {
    path {
      stroke: #6699ff;
    }
  }
  &:hover {
    background: #527acc;
    border: 1px solid #527acc;
    color: #f0f1f2;
    svg {
      path {
        stroke: #f0f1f2;
      }
    }
  }
`

const Select = styled.select`
  display: flex;
  flex-direction: row;
  /* align-items: flex-start; */
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 28px;
  gap: 4px;
  width: 268px;
  height: 32px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  -webkit-appearance: none;
  appearance: none;
`

const SelectWrapper = styled.div`
  position: relative;
`
const MicrophoneVolumeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  width: 73%;
  margin-left: auto;
  margin-right: auto;
`

const VolumeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 268px;
`

const MicrophonePlayBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const VolumeControlContainer = styled.div`
  display: flex;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  input[type="range"] {
    // height: 25px;
    -webkit-appearance: none;
    // margin: 10px 0;
    // margin-bottom: 5px;
    width: 100%;
  }
  input[type="range"]:focus {
    outline: none;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #6699ff;
    background: #6699ff;
    border-radius: 1px;
    border: 0px solid #6699ff;
  }
  input[type="range"]::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px #6699ff;
    border: 2px solid #6699ff;
    height: 18px;
    width: 18px;
    border-radius: 25px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -7px;
  }
  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: #6699ff;
  }
  input[type="range"]::-moz-range-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #6699ff;
    background: #6699ff;
    border-radius: 1px;
    border: 0px solid #6699ff;
  }
  input[type="range"]::-moz-range-thumb {
    box-shadow: 0px 0px 0px #6699ff;
    border: 2px solid #6699ff;
    height: 18px;
    width: 18px;
    border-radius: 25px;
    background: #ffffff;
    cursor: pointer;
  }
  input[type="range"]::-ms-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type="range"]::-ms-fill-lower {
    background: #6699ff;
    border: 0px solid #6699ff;
    border-radius: 2px;
    box-shadow: 0px 0px 0px #6699ff;
  }
  input[type="range"]::-ms-fill-upper {
    background: #6699ff;
    border: 0px solid #6699ff;
    border-radius: 2px;
    box-shadow: 0px 0px 0px #6699ff;
  }
  input[type="range"]::-ms-thumb {
    margin-top: 1px;
    box-shadow: 0px 0px 0px #6699ff;
    border: 2px solid #6699ff;
    height: 18px;
    width: 18px;
    border-radius: 25px;
    background: #ffffff;
    cursor: pointer;
  }
  input[type="range"]:focus::-ms-fill-lower {
    background: #6699ff;
  }
  input[type="range"]:focus::-ms-fill-upper {
    background: #6699ff;
  }
`

const BorderSection = styled.div`
  width: 654px;
  height: 0px;
  border: 1px solid #e0e0e0;
  margin-left: -56px;
  margin-bottom: 40px;
  margin-top: 25px;
`

export const Styled = {
  Container,
  LabelBox,
  Header,
  IconClose,
  IconSvgFillColor,
  IconSvgStrokeColor,
  ButtonBox,
  ButtonIcon,
  ButtonSave,
  ButtonSaveText,
  ButtonSpeaker,
  ButtonTest,
  ButtonTestStroke,
  ButtonTestFill,
  ButtonPlaying,
  BorderSection,
  MicrophoneVolumeBox,
  MicrophonePlayBox,
  VolumeBox,
  Label,
  Select,
  SelectWrapper,
  VolumeControlContainer,
}
