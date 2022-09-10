import React, {memo} from 'react'
import { PhaseAction } from '../usePhase'

type ActionListProps = {
  actions: PhaseAction[]
}

const ActionList = ({ actions }: ActionListProps) => {
  return (
    <ul>
      {actions.map((action) => (
        <li key={action}>{action}</li>
      ))}
    </ul>
  )
}

export default memo(ActionList)
