import './App.css';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import SignUpPage from './pages/signup';
// import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signup' component={SignUpPage} />
        </Switch>
        <Home />
        <SignUpPage />


      </Router>

    </>

  );
}

export default App;
