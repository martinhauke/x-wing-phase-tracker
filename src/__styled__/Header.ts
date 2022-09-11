import styled from 'styled-components/macro'
import { memo } from 'react'

const Header = styled.div`
  width: 100%;

  text-align: center;
  background-color: ${(props) => props.theme.colors.secondary};
  color: white;
  border-bottom: 3px solid ${(props) => props.theme.colors.affirm};
`

export default memo(Header)
