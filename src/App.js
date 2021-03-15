import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Summary from './pages/Summary';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Summary} />
      </Switch>
    </Router>
  );
}

export default App;
