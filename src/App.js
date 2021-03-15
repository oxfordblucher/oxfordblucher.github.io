import './App.css';
import Summary from './pages/Summary';
import Header from './components/Header';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Summary />
    </React.Fragment>
  );
}

export default App;
