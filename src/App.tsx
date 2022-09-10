import React, { useState } from 'react';
import Header from './Header'

enum Phase {
  Planning,
  System,
  Activation,
  Engagement,
  End,
}

function App() {
  const [currentPhase, setCurrentPhase] = useState<Phase>(0)
  return (
    <div>
      <Header/>
      <section>
        {currentPhase}
        <button onClick={e => setCurrentPhase(prev => (prev + 1) % 5)}>Next</button>
      </section>
    </div>
  );
}

export default App;
