import './App.css'
import { Routes, Route, Outlet } from 'react-router-dom'
import { Home } from './components/views/Home'
import { NavBar } from './components/nav/NavBar'

const App = () => {

  return (
    <Routes>
      <Route path="/" element={
        <>
          <NavBar />
          <Home />
          <Outlet />
        </>
      }/>
    </Routes>
  )
}

export default App
