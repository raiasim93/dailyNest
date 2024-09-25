import React from 'react'
import Navbar from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../src/styles/index.css';
import TaskSection from './components/TaskSection';
import Landing from './components/Landing';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <div className='container-fluid' id='dailynest' style={{ backgroundColor: 'var(--main-color)' }}>
          <Navbar />
          <Landing />
          <Footer />
      </div>     
    </>
  )
}

export default App;