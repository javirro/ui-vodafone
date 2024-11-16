import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/Home'
import Devices from './routes/Devices/Devices'
import DeviceDetails from './routes/Device/DeviceDetails'
import Navbar from './components/Navbar/Navbar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './App.css'


const Layout = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <main className="app">
        <Navbar />
        <Outlet />
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
        {
          path: '/devices/:id',
          element: <DeviceDetails />,
        }
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
