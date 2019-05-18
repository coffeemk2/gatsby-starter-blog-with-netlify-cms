import styled from "styled-components"
import color from "../../../config/color"

export default styled.h1`
  font-size: 24px;
  text-align: ${props => props.center && "center"};
  color: ${props => (props.pink ? color.lipstickVivid : color.black)};
`
