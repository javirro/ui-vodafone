import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/Home'
import Devices from './routes/Devices/Devices'
import Navbar from './components/Navbar/Navbar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './App.css'

const Layout = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <main className='app'>
      <Navbar />
      <Outlet /> {/* This is where the nested route components will render */}
    </main>
    </QueryClientProvider>
  )
}

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/devices',
          element: <Devices />,
        },
      ],
    },
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
