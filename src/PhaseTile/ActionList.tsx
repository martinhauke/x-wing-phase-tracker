import React, { memo } from 'react'
import { PhaseAction } from '../usePhase'
import List from './__styled__/List'
import ListItem from './__styled__/ListItem'

type ActionListProps = {
  actions: PhaseAction[]
}

const ActionList = ({ actions }: ActionListProps) => {
  return (
    <List>
      {actions.map((action) => (
        <ListItem key={action}>{action}</ListItem>
      ))}
    </List>
  )
}

export default memo(ActionList)
