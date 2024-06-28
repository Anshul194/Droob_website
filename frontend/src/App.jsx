import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './component/home'
import Contact from './component/Pages/Contact'
import Gallery from './component/Pages/gallery';
import Service from './component/Pages/service'
const routes=(
  <Router>
  <Routes>
  <Route path='/home' exact element={<Home></Home>}></Route>
  <Route path='/contact' exact element={<Contact></Contact>}></Route>
  <Route path='/gallery' element={<Gallery></Gallery>}></Route>

  <Route path='/service' element={<Service></Service>}></Route>
  </Routes>
  </Router>
);

export default function App() {
  return (
    <>
    <div>{routes}</div>
</>
  )
}