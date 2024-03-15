import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { ThemeProvider } from '@material-tailwind/react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import './index.css'
import { UserProvider } from './Context/User.tsx'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </ThemeProvider>
  </QueryClientProvider>
)
