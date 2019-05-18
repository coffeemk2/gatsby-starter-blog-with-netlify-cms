import React, { useState } from "react"
import Link from "./header-link"
import routes from "../../../config/routes"
import Logo from "../../common/logo"
import styled from "styled-components"
import MenuButton from "./menu-button"
import useWidth from "../../../utils/use-width"
import color from "../../../config/color"

const HeaderBackground = styled.div`
  z-index: 1200;
  position: relative;
  height: 74px;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  @media (max-width: 960px) {
    height: 52px;
    background-color: ${color.white};
  }
`

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  flex-grow: 3;
  margin: 0 auto;
`

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  @media (max-width: 960px) {
    flex-direction: column;
    display: ${props => (props.open ? "block" : "none")};
    top: 52px;
    position: absolute;
    width: 100vw;
    li {
      background-color: ${color.white};
      text-align: center;
      border-top: 1px solid ${color.grey1};
      height: 44px;
      line-height: 44px;
      a {
        display: block;
      }
    }
  }
`

const MenuBackground = styled.div`
  display: ${props => (props.open ? "block" : "none")};
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.75);
`

export default () => {
  const [open, setOpen] = useState(false)
  const width = useWidth()
  return (
    <header style={{ position: "relative" }}>
      <HeaderBackground>
        <HeaderWrap>
          <Link to={routes.root}>
            <Logo style={{ margin: "0 15px" }} small={width < 960} />
          </Link>
          <Ul open={open}>
            <li>
              <Link to={routes.root}>トップ</Link>
            </li>
            <li>
              <Link to={routes.blog}>ブログ</Link>
            </li>
            <li>
              <Link to={routes.menu}>コンサルメニュー</Link>
            </li>
            <li>
              <Link to={routes.profile}>プロフィール</Link>
            </li>
            <li>
              <Link to={routes.contact}>ご予約・お問い合わせ</Link>
            </li>
          </Ul>

          <MenuButton handleClick={() => setOpen(!open)} open={open} />
        </HeaderWrap>
      </HeaderBackground>
      <MenuBackground open={open} onClick={() => setOpen(!open)} />
    </header>
  )
}
