import styled from "styled-components"

export default styled.div`
  margin: 20px auto;
  max-width: ${props => (props.wide ? "950px" : "790px")};
  @media (max-width: 960px) {
    max-width: 90%;
  }
`
