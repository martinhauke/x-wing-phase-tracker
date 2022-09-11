import styled from 'styled-components/macro'
import { memo } from 'react'

const ListItem = styled.li`
  margin-bottom: ${(props) => props.theme.spaces.medium};
  padding: 7px 10px;

  border-left: 10px solid ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.light};
  font-size: 1.3rem;
  list-style: none;
`

export default memo(ListItem)
