import styled from 'styled-components/macro'
import { memo } from 'react'

const Button = styled.button`
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 20px 20px;
  width: 100%;
  font-size: 2em;
  color: white;
  background-color: #058;
  border: none;
  
  &:active {
    background-color: #27a;
  }
`

export default memo(Button)