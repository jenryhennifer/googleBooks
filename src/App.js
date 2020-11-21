import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//pages
import Search from './pages/Search';
import Saved from './pages/Saved';
//components
import Navbar from './components/Navbar/Navbar';
import Jumbotron from './components/Jumbotron/Jumbotron';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Jumbotron />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
