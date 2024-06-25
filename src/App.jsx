// import { useState } from 'react'
// import { BrowserRouter, Routes, Route ,useLocation} from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Navbar from './component/navbar.jsx'
// import Home from './component/home.jsx'
// import About from './component/about.jsx'
// import Service from './component/service.jsx'
// import Params from './component/params.jsx'
// import Error from './component/notFound'
// import { useLocation  from 'react-router-dom'



// function App() {
//   // const [count, setCount] = useState(0)

//   let location=useLocation()

//   let paths=['/','/about','/service','/params']

//   let shouldShowNavbar = paths.includes(location.pathname);

//   return (
//     <>
//       {/* <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */}
     

//       <BrowserRouter>
//         {shouldShowNavbar && <Navbar />}
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/about' element={<About />} />
//           <Route path='/service' element={<Service />} />
//           <Route path='/params/:Id' element={<Params />}/>
//           <Route path='/*' element={<Error />}/>
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App;


// import React from 'react';
// import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
// import Navbar from './component/Navbar'; // Assuming Navbar is defined and imported correctly
// import Home from './component/Home'; // Import your components like Home, About, Service, Params, Error
// import About from './component/About';
// import Service from './component/Service';
// import Params from './component/Params';
// import Error from './component/Error';

import { BrowserRouter } from "react-router-dom"
import Router from "./component/Router"
import React from "react"


const  App=()=>{
  return(
    <>
          <BrowserRouter>
            <Router/>
          </BrowserRouter>
    </>
  )
}

export default App