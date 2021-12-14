import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import SignUpPage from './pages/signup';
// import NewProject from './pages/newproject'
// import NavBar from './components/NavBar';
// import EditHouse from './components/EditHouse';
import Sidebar from './components/SidebarPro/Sidebar'

function App() {
  return (
    <>

      <Routes>
        <Route exact path='/react-landingpage' element={<Home />} />
        <Route exact path='/signin' element={<SignUpPage />} />
        <Route exact path='/prosidebar' element={<Sidebar />} />
      </Routes>
      {/* {/* <Home /> */}
      {/* <SignUpPage />  */}
      {/* <NewProject />
        <EditHouse /> */}

    </>

  );
}

export default App;
