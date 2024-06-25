
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';

// Assuming component imports exist
import Navbar from '../component/navbar.jsx'
import Home from '../component/home.jsx';
import About from '../component/about.jsx';
import Service from '../component/service.jsx';
import Params from '../component/params.jsx';
import Error from '../component/notFound.jsx';

const Router = () => {
  const location = useLocation();

  const shouldShowNavbar = ['/', '/about', '/service', '/params'].includes(location.pathname);

  return (
    <>
      {/* <BrowserRouter> */}
        {shouldShowNavbar && <Navbar />} {/* Conditional rendering of Navbar based on location */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/params/:id" element={<Params />} /> {/* Use lowercase 'id' for consistency */}
          <Route path="*" element={<Error />} /> {/* Catch-all route for unknown paths */}
        </Routes>
      {/* </BrowserRouter> */}
    </>
  );
};

export default Router;
