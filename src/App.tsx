import { NavBar } from './components/NavBar'
import { Home } from './Pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { NotFound } from './Pages/NotFound'
import { UserPage } from './Pages/UserPage'
import { SingLogForm } from './components/SingLog'
import { Discover } from './components/Discover'
import { MoviesPages } from './Pages/MoviesPage'

export function App() {
  return (
    <Router>
      <NavBar />
      <SingLogForm />
      <main className='flex gap-10'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user/:username' element={<UserPage />} />
          <Route path='/discover/:imdbID' element={<MoviesPages/>} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        <Discover />
      </main>
    </Router>
  )
}
