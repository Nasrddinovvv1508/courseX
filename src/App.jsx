// material-tailwind
import { Button } from '@material-tailwind/react'

// react
import React, { useEffect } from 'react'

// react-router-dom
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

// layout
import MainLayout from './layout/MainLayout'

// pages
import { Home, About, CourseAdd, AllCourses, SingleCourse, CreateCourse, Competition, Login, Register } from './pages'

// actions
import { action as LoginAction } from './pages/Login'
import { action as RegisterAction } from './pages/Register'
import { action as CreateAction } from './pages/CreateCourse'

// components
import ProtectedRoutes from './components/ProtectedRoutes'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { isAuthChange, login } from './app/userSlice'

// firebase
import { auth } from './firebase/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'

function App() {
  let { user, isAuthReady } = useSelector((state) => state.user)
  let dispatch = useDispatch();

  let routes = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
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
        {
          path: `/all-course`,
          element: <AllCourses />
        },
        {
          path: `/single-course/:id`,
          element: <SingleCourse />,
        },
        {
          path: `/create-course`,
          element: <CreateCourse />,
          action: CreateAction,
        },
        {
          path: `/competition`,
          element: <Competition />
        },
      ]
    },
    {
      path: `/login`,
      element: user ? <Navigate to={`/`} />
        : (
          <Login />
        ),
      action: LoginAction
    },
    {
      path: `/register`,
      element: user ? <Navigate to={`/`} />
        : (
          <Register />
        ),
      action: RegisterAction
    },
  ])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(login(user))
      dispatch(isAuthChange())
    })
  }, [])

  return <>
    {isAuthReady &&
      < RouterProvider router={routes} />
    }
  </>
}

export default App