import styled from 'styled-components/macro'
import { memo } from 'react'

const ListItem = styled.li`
  padding: 7px 0;
  font-size: 1.3rem;
`

export default memo(ListItem)