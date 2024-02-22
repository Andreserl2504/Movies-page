import { NavBar } from './components/NavBar'
import { Home } from './Pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { NotFound } from './Pages/NotFound'
import { UserPage } from './Pages/UserPage'

export function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<UserPage/>} />
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}
