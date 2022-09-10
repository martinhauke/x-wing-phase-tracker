import React from 'react'
import Header from './Header'
import usePhase from './usePhase'
import PhaseTile from './PhaseTile'
import Button from './__styled__/Button'
import AppContainer from './__styled__/AppContainer'
import ContentContainer from './__styled__/ContentContainer'

function App() {
  const { currentPhase, nextPhase } = usePhase()
  return (
    <AppContainer>
      <Header />
      <ContentContainer>
        <PhaseTile currentPhase={currentPhase} />
        <Button onClick={nextPhase}>Next</Button>
      </ContentContainer>
    </AppContainer>
  )
}

export default App
