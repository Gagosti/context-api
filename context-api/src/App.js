import React from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import { ProviderCounter } from './ContextCounter';
import './App.css';

function App() {
  return (
    <div className="App">
      <ProviderCounter>
        <Header></Header>
        <Counter></Counter>
      </ProviderCounter>
    </div>
  );
}

export default App;
