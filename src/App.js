import './App.css';
import { BrowserRouter as Router, Routes as Switch, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import SignUpPage from './pages/signup';
// import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <Router>
        {/* <NavBar /> */}
        <Switch>
          <Route path='/' component={Home} exact />
          {/* <Home /> */}

          <Route path='/signup' component={SignUpPage} exact />
          {/* <SignUpPage /> */}

        </Switch>
        <Home />
        <SignUpPage />


      </Router>

    </>

  );
}

export default App;
