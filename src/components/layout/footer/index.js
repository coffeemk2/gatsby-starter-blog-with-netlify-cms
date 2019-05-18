import React from "react"
import Logo from "../../common/logo"
import Footer from "./footer"
import color from "../../../config/color"

export default () => {
  return (
    <Footer>
      <Logo style={{ marginTop: 50, marginBottom: 10 }} />
      <div
        style={{
          textAlign: "center",
          marginTop: 22,
          marginBottom: 50,
          fontSize: 14,
          lineHeight: "24px",
          color: color.grey7,
        }}
      >
        平日 10:00 ~ 17:00
        <br />
        熊本市北区 自衛隊北駐屯地そば
      </div>
      <div
        style={{
          width: "100%",
          height: 54,
          backgroundColor: color.pinkish,
          color: color.white,
          fontSize: 12,
          textAlign: "center",
          lineHeight: "54px",
        }}
      >
        Copyright &copy; {new Date().getFullYear()} Kuuleminen inc. All Rights
        Reserved.
      </div>
    </Footer>
  )
}
