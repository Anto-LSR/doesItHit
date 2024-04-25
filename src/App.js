import React, { useState } from 'react';
import './App.css';

function App() {
  const [defMax, setDefMax] = useState(0);
  const [niveauAttaquant, setNiveauAttaquant] = useState(1);

  const calculerToucher = (defMax, niveau) => {
    const toucherBase = 20 - (niveau -1 );
    
    if (defMax >= toucherBase) {
      return 0;
    } else if (defMax < 0) {
      return toucherBase;
    } else {
      return toucherBase - defMax;
    }
  };

  const handleChangeDef = (event) => {
    const value = parseInt(event.target.value, 10);
    setDefMax(value);
  };

  const handleChangeNiveau = (event) => {
    const value = parseInt(event.target.value, 10);
    setNiveauAttaquant(value );
  };

  return (
    <div className="App">
      <h1>Calculateur de Toucher pour JDR</h1>
      <div>
        <label htmlFor="defMax">Défense de la cible :</label>
        <input
          type="number"
          id="defMax"
          value={defMax}
          onChange={handleChangeDef}
          min={0}
          max={20}
        />
      </div>
      <div>
        <label htmlFor="niveauAttaquant">Niveau de l'Attaquant :</label>
        <input
          type="number"
          id="niveauAttaquant"
          value={niveauAttaquant }
          onChange={handleChangeNiveau}
          min={1}
          max={20}
        />
      </div>
      <div>
        <p>Toucher nécessaire pour percer la défense : {calculerToucher(defMax, niveauAttaquant)}</p>
        <i>Penser à ajouter le bonus de toucher de l'attaquant (en fonction de la DEX) </i>
      </div>
    </div>
  );
}

export default App;
