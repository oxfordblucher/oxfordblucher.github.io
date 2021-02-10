import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Summary from './pages/Summary';
import Projects from './pages/Projects';
import Connect from './pages/Connect';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Summary} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/connect' component={Connect} />
      </Switch>
    </Router>
  );
}

export default App;
