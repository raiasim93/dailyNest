import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "../src/styles/index.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Features from "./components/Features";
import appFeatures from "./components/appFeatures";
import "../src/styles/Login.css";
import LoginPage from "./components/pages /LoginPage";
import CreateTitles from "./components/pages /CreateTitles";
import CreateTask from "./components/pages /CreateTask";
import UpcomingTask from "./components/pages /UpcomingTask";

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        {/* Navbar at the top */}
        <Navbar />

        {/* Main content */}

        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <Landing />
                <Features feature={appFeatures} />
              </>
            }
          />

          {/* Login Page Route */}
          <Route path="/login" element={<LoginPage />} />

          {/* Fallback Route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <div className="d-flex flex-column ">
        {/* Navbar at the top */}

        {/* Main content */}
        <CreateTask />

        {/* Footer at the bottom */}
        <Footer />
      </div>
    </Router>

    // <Router>
    //   <div className="d-flex flex-column ">
    //     {/* Navbar at the top */}
    //     <Navbar />

    //     {/* Main content */}
    //     <CreateTask />

    //     {/* Footer at the bottom */}
    //     {/* <Footer /> */}
    //   </div>
    // </Router>
  );
};

export default App;
