import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { ThemeProvider } from '@material-tailwind/react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import './index.css'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </QueryClientProvider>
)
