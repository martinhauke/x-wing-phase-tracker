import { memo } from 'react'
import { Phase } from '../usePhase'
import ActionList from './ActionList'
import StyledPhaseTile from './__styled__/PhaseTile'

type PhaseProps = {
  currentPhase: Phase
}

const PhaseTile = ({ currentPhase }: PhaseProps) => {
  return (
    <StyledPhaseTile>
      <h2>{currentPhase.name}</h2>
      <ActionList actions={currentPhase.actions} />
    </StyledPhaseTile>
  )
}

export default memo(PhaseTile)
