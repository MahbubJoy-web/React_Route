import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Navber from './Components/Navber/Navber'
import Homepage from './Pages/Homepage'
import Contract from './Pages/Contract'
import About from './Pages/About'
import Travelling from './Pages/Travelling'
import NotFound from './Components/NotFound/NotFound'

function App() {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contract' element={<Contract/>}/>
        <Route path='/travelling' element={<Travelling/>}/>
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  )


  return (
    <>
      <Navber />
      <RouterProvider router={myRoute}/>
      <Footer />
    </>
  )
}

export default App
