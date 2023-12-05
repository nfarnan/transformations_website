// import './App.css'
import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Map from './pages/Maps'
import Timeline from './pages/Timeline'
import Media from './pages/Media'
import Layout from './pages/Layout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element= {<Home />} />
      <Route path='Map' element={<Map />} />
      <Route path='Timeline' element={<Timeline />} />
      <Route path='Media' element={<Media />} />
    </Route>
  )
);

function App() {

  return (
    <>

      <RouterProvider router={router}/>
    </>
  )
}

export default App;
