// import React from 'react'
// import ReactDOM from 'react-dom/client'
// // import App from './App.jsx'
// import './index.css'
// import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
// import Layout from './Layout.js';
// import Home from './components/Home/Home.js';
// import About from './components/About/About.js';
// import Contact from './components/Contact/Contact.js';
// import User from './components/User/User.js';
// import GitHub from './components/Github/Github.js';

// // const router = createBrowserRouter([
// //   {
// //     path: '/',
// //     element: <Layout />,
// //     children: [
// //       {
// //         path: "",
// //         element: <Home />
// //       },
// //       {
// //         path: "about",
// //         element: <About />
// //       },
// //       {
// //         path: "contact",
// //         element: <Contact />
// //       }
// //     ]
// //   }
// // ])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="" element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="contact" element={<Contact />} />
//       <Route path="user/:userid" element={<User />} />
//       <Route path="github" element={<GitHub />} />
//     </Route>
//   )
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { HashRouter as Router, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from './Layout.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';
import User from './components/User/User.js';
import GitHub from './components/Github/Github.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route path="github" element={<GitHub />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
