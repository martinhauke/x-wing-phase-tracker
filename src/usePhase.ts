import { useState } from 'react'

export type Phase = {
  name: string
  actions: PhaseAction[]
}

export type PhaseAction = string

type UsePhase = {
  currentPhase: Phase
  nextPhase: (_: any) => void
}

const planningPhase: Phase = {
  name: 'Planning Phase',
  actions: ['Set maneuver dials', 'Roll for initiative'],
}

const systemPhase: Phase = {
  name: 'System Phase',
  actions: ['Decloak', 'Drop/Deploy devices'],
}

const activationPhase: Phase = {
  name: 'Activation Phase',
  actions: ['Revieal dial', 'Execute maneuvers', 'Perform action'],
}

const engagementPhase: Phase = {
  name: 'Engagement Phase',
  actions: ['Perform attack'],
}

const endPhase: Phase = {
  name: 'End Phase',
  actions: [
    'Abilities that occur "at the start of the End Phase"',
    'Abilities that occur "during the End Phase"',
    'All circular tokens are removed from all ships (green, then orange).',
    'Each card with a recurring charge icon recovers that many charges. Each\n' +
      'card with a negative recurring charge icon loses that many charges.',
  ],
}

const phases: Phase[] = [
  planningPhase,
  systemPhase,
  activationPhase,
  engagementPhase,
  endPhase,
]

const usePhase = (): UsePhase => {
  const [currentPhase, setCurrentPhase] = useState<Phase>(phases[0])

  const getNextPhasePosition = (current: number) =>
    (current + 1) % phases.length
  const nextPhase = (_: any) =>
    setCurrentPhase(
      (prev: Phase) =>
        phases[
          getNextPhasePosition(
            phases.findIndex((item) => item.name === prev.name)
          )
        ]
    )

  return {
    currentPhase,
    nextPhase,
  }
}

export default usePhase
