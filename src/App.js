import './App.css';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import SignUpPage from './pages/signup';
import NewProject from './pages/newproject'
// import NavBar from './components/NavBar';
import EditHouse from './components/EditHouse';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signup' component={SignUpPage} />
        </Switch>
        {/* <Home /> */}
        <SignUpPage />
        <NewProject />
        <EditHouse />

      </Router>

    </>

  );
}

export default App;
