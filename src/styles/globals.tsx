import styled from "styled-components"
import { ButtonProps } from "../interfaces"
import { color } from "./base"

const ButtonIcon = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  cursor: pointer;
  display: inline-block;
  background-color: ${color.white};
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  padding 0;
`

export { ButtonIcon }
