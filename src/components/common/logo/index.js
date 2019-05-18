import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

export default ({ style, small }) => (
  <StaticQuery
    query={logoQuery}
    render={data => (
      <Image
        fluid={data.logo.childImageSharp.fluid}
        alt="logo"
        style={{ ...style, width: small ? 150 : 226 }}
      />
    )}
  />
)

const logoQuery = graphql`
  query LogoQuery {
    logo: file(absolutePath: { regex: "/logo.png/" }) {
      childImageSharp {
        fluid(maxWidth: 226) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
