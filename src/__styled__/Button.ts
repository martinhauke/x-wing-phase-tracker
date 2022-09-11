import styled from 'styled-components/macro'
import { memo } from 'react'

const Button = styled.button`
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;
  max-height: ${(props) => props.theme.nextButtonMaxHeight};

  padding: ${(props) => props.theme.spaces.medium};
  font-size: 2em;
  border: none;
  color: white;
  background-color: ${(props) => props.theme.colors.affirm};

  &:active {
    background-color: ${(props) => props.theme.colors.affirmLight};
  }
`

export default memo(Button)
