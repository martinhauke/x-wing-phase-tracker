import styled from 'styled-components/macro'
import { memo } from 'react'

const ContentContainer = styled.div`
  max-width: 500px;
  margin: auto;
  padding: 20px;
`

export default memo(ContentContainer)
