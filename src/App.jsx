// material-tailwind
import { Button } from '@material-tailwind/react'

// react
import React from 'react'

// react-router-dom
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// layout
import MainLayout from './layout/MainLayout'

// pages
import { Home, About, CourseAdd } from './pages'

function App() {
  let routes = createBrowserRouter([
    {
      path: '/',
      element: (
        <MainLayout />
      ),
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: `/about`,
          element: <About />
        },
        {
          path: `/course-add`,
          element: <CourseAdd />
        },
      ]
    }
  ])

  return <RouterProvider router={routes} />
}

export default App