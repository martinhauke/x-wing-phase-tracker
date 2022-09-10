import React from 'react'
import Header from './Header'
import usePhase from './usePhase'
import PhaseTile from './PhaseTile'

function App() {
  const { currentPhase, nextPhase } = usePhase()
  return (
    <div>
      <Header />
      <main>
        <PhaseTile currentPhase={currentPhase} />
        <button onClick={nextPhase}>Next</button>
      </main>
    </div>
  )
}

export default App
