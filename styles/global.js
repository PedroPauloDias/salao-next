import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export default createGlobalStyle`
  body {
    max-width:100vw;
    margin: 0px;
    padding: 0px;
    color: ${props => (props.darkMode ? 'white' : 'black')};
    background-color: #f6e9e6;
  }`

export const Container = styled.div`
display:  flex;
align-items: center;
justify-content: space-around;
margin: 30px 27px 20px 20px;


`