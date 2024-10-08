import React from 'react'
import Navbar from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../src/styles/index.css';
import Landing from './components/Landing';
import Footer from './components/Footer';
import Features from './components/Features';
import appFeatures from './components/appFeatures';
import '../src/styles/Login.css';
import LoginPage from './components/pages /LoginPage';




const App = () => {
  
  return (
    <>
      <div className='container-fluid g-0 ' id='dailynest' style={{ backgroundColor: 'white'}}>
          {/* <Navbar />
          <Landing />
          <Features feature = {appFeatures} />
          <Footer /> */}
          <LoginPage />
      </div>     
    </>
  )
}

export default App;