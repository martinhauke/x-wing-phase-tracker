import { useState } from 'react'

type Phase = {
  name: string
  actions: string[]
}

type UsePhase = {
  currentPhase: Phase
  nextPhase: (_: any) => void
}

const planningPhase: Phase = {
  name: 'Planning Phase',
  actions: ['Set maneuver dials'],
}

const systemPhase: Phase = {
  name: 'System Phase',
  actions: ['Decloak', 'Drop bomb'],
}

const activationPhase: Phase = {
  name: 'Activation Phase',
  actions: ['Revieal dial', 'Execute maneuvers', 'Perform action'],
}

const engagementPhase: Phase = {
  name: 'Engagement Phase',
  actions: ['perform attack'],
}

const endPhase: Phase = {
  name: 'End Phase',
  actions: ['remove tokens', 'flip charges'],
}

const phases: Phase[] = [planningPhase, systemPhase, activationPhase, engagementPhase, endPhase]

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
