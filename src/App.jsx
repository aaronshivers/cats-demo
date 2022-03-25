import React, { useState } from 'react';
import Facts from './components/Facts';
import Breeds from './components/Breeds';

const FACTS = 0;
const BREEDS = 1;

function App() {
  const [view, setView] = useState(null);

  const handleFactsButtonClick = () => setView(FACTS);
  const handleBreedsButtonClick = () => setView(BREEDS);

  return (
    <main>
      <button type="button" onClick={handleFactsButtonClick}>Facts</button>
      <button type="button" onClick={handleBreedsButtonClick}>Breeds</button>
      {
        view === FACTS ? <Facts /> : null
      }
      {
        view === BREEDS ? <Breeds /> : null
      }
    </main>
  );
}

export default App;
