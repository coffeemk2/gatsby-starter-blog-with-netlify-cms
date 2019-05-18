import styled from "styled-components"
import color from "../../../config/color"

export default styled.h3`
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
  color: ${color.black};
  text-align: ${props => props.center && "center"};
`
