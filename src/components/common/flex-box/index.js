import styled from "styled-components"

export default styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent};
  flex-direction: ${props => props.flexDirection};
  align-items: ${props => props.alignItems};
  max-width: ${props => props.maxWidth};
  height: ${props => props.h};
  margin: ${props => props.m};
  padding: ${props => props.p};
  @media (max-width: 960px) {
    flex-direction: ${props => props.spDirection};
    align-items: ${props => props.spAlign};
  }
`
