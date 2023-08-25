import { Navigate, Route, BrowserRouter, Routes } from 'react-router-dom'

import HomePage from './HomePage'
import TodoPage from './TodoPage'
import SigninPage from './SigninPage'
import SignupPage from './SignupPage'
import NotFoundPage from './NotFoundPage'
import { useAuthContext } from '../AuthProvider'

interface RouteProps {
  fallback: string
  children: JSX.Element
}

function ProtectedRoute({ fallback, children }: RouteProps) {
  const { token } = useAuthContext()
  return token ? children : <Navigate to={fallback} replace />
}

function PublicRoute({ fallback, children }: RouteProps) {
  const { token } = useAuthContext()
  return token ? <Navigate to={fallback} replace /> : children
}

function PageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route
          path="/todo"
          element={
            <ProtectedRoute fallback="/signin">
              <TodoPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <PublicRoute fallback="/todo">
              <SigninPage />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute fallback="/todo">
              <SignupPage />
            </PublicRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default PageRouter
