import styled from "styled-components"
import color from "../../../config/color"

export default styled.p`
  font-size: 16px;
  line-height: ${props => (props.lineHigh ? "32px" : "24px")};
  color: ${color.black};
  text-align: ${props => props.center && "center"};
  overflow: hidden;
  text-overflow: ellipsis;
`
