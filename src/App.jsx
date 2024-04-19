import './App.css'
import { Routes, Route, Outlet } from 'react-router-dom'
import { Home } from './components/views/Home'
import { NavBar } from './components/nav/NavBar'
import { DogList } from './components/views/DogList'
import { Walkers } from './components/views/Walkers'

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
      <Route path="/dogdetails">
        <Route path=":dogId" element={<DogList />}/>
      </Route>
      <Route path="/walkers" element={<Walkers />}/>
    </Routes>
  )
}

export default App
