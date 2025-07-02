import Navbar from '../widgets/Navbar'
import Dashboard from '../pages/Dashboard'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import Schedule from '../pages/Schedule'
import Students from '../pages/Students'
import Teachers from '../pages/Teachers'
import Groups from '../pages/Groups'

const About = () => <h2>About Page</h2>
const NotFound = () => <h2>404: Page Not Found</h2>

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'schedule',
        element: <Schedule />,
      },
      {
        path: 'students',
        element: <Students />,
      },
      {
        path: 'teachers',
        element: <Teachers />,
      },
      {
        path: 'groups',
        element: <Groups />,
      },
    ],
  },
])

function BaseLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default BaseLayout
