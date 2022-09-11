import styled from 'styled-components/macro'
import { memo } from 'react'

const ContentContainer = styled.div`
  max-width: ${(props) => props.theme.contentWidth};

  margin: auto auto ${(props) => props.theme.nextButtonMaxHeight};

  padding: ${(props) => props.theme.spaces.medium};
`

export default memo(ContentContainer)
