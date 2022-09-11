import { memo } from 'react'
import { Phase } from '../usePhase'
import ActionList from './ActionList'
import StyledPhaseTile from './__styled__/PhaseTile'
import PhaseTitle from './__styled__/PhaseTitle'

type PhaseProps = {
  currentPhase: Phase
}

const PhaseTile = ({ currentPhase }: PhaseProps) => {
  return (
    <StyledPhaseTile>
      <PhaseTitle>{currentPhase.name}</PhaseTitle>
      <ActionList actions={currentPhase.actions} />
    </StyledPhaseTile>
  )
}

export default memo(PhaseTile)
