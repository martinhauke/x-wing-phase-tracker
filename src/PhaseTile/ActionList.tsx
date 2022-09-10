import React, {memo} from 'react'
import { PhaseAction } from '../usePhase'
import ListItem from './__styled__/ListItem'

type ActionListProps = {
  actions: PhaseAction[]
}

const ActionList = ({ actions }: ActionListProps) => {
  return (
    <ul>
      {actions.map((action) => (
        <ListItem key={action}>{action}</ListItem>
      ))}
    </ul>
  )
}

export default memo(ActionList)
