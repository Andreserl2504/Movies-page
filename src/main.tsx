import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { ThemeProvider } from '@material-tailwind/react'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </>
)
