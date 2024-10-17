import React, { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate, Link} from 'react-router-dom';
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
import CreateList from './components/pages /CreateList';





const App = () => {
  return (
    // <Router>
    //   <div className="d-flex flex-column min-vh-100">
    //     {/* Navbar at the top */}
    //     <Navbar />

    //     {/* Main content */}
    //     <div className="flex-grow-1">
    //       <Routes>
    //         {/* Home Route */}
    //         <Route
    //           path="/"
    //           element={
    //             <>
    //               <Landing />
    //               <Features feature={appFeatures} />
    //             </>
    //           }
    //         />

    //         {/* Login Page Route */}
    //         <Route path="/login" element={<LoginPage />} />

    //         {/* Create List Route */}
    //         {/* <Route path="/create-list" element={<CreateList />} /> */}

    //         {/* Fallback Route */}
    //         <Route
    //           path="*"
    //           element={<Navigate to="/" />}
    //         />
    //       </Routes>
    //     </div>

    //     {/* Footer at the bottom */}
    //     <Footer />
    //   </div>
    // </Router>
    
 
    <Router>
      <div className="d-flex flex-column ">
        {/* Navbar at the top */}
        <Navbar />

        {/* Main content */}
        <div className="create-list-container">
          <CreateList />
        </div>

        {/* Footer at the bottom */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
