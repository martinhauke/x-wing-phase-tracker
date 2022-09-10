import React from 'react';
import Header from './Header'
import usePhase from './usePhase'

function App() {
  const {currentPhase, nextPhase} = usePhase()
  return (
    <div>
      <Header/>
      <section>
          <div>{currentPhase.name}</div>
        <button onClick={nextPhase}>Next</button>
      </section>
    </div>
  );
}

export default App;
