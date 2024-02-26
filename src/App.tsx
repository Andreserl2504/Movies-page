import { NavBar } from './components/NavBar'
import { Home } from './Pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { NotFound } from './Pages/NotFound'
import { UserPage } from './Pages/UserPage'
import { SingLogForm } from './components/SingLog'

export function App() {
  return (
    <Router>
      <NavBar />
      <SingLogForm/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<UserPage/>} />
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}
