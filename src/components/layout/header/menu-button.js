import React from "react"
import styled from "styled-components"
import color from "../../../config/color"

const Menu = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  margin-right: 20px;
  display: none;
  transition: all 0.4s;
  box-sizing: border-box;
  cursor: pointer;
  @media (max-width: 960px) {
    display: inline-block;
  }
  > span {
    transition: all 0.4s;
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${color.grey5};
    border-radius: 1px;
    :nth-of-type(1) {
      top: 2px;
      transform: ${props =>
        props.open
          ? `translateY(8px) rotate(-45deg)`
          : `translateY(0px) rotate(0)`};
    }
    :nth-of-type(2) {
      top: calc(50% - 1px);
      opacity: ${props => (props.open ? 0 : 1)};
    }
    :nth-of-type(3) {
      bottom: 2px;
      transform: ${props =>
        props.open
          ? `translateY(-7px) rotate(45deg)`
          : `translateY(0px) rotate(0)`};
    }
  }
`

const MenuButton = props => {
  const { open, handleClick } = props

  return (
    <Menu onClick={handleClick} open={open}>
      <span />
      <span />
      <span />
    </Menu>
  )
}

export default MenuButton
