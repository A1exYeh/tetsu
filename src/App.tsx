import { Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import PageLayout from './pages/PageLayout';
import Dashboard from './pages/dashboard/Dashboard';
import SessionProvider from './hooks/useAuth';
import ProtectedRoute from './components/protectedROute';
import AddExerciseForm from './components/AddExerciseForm';
import './index.css';

export default function App() {
  return (
    <>
      <SessionProvider>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path='/' element={<LoginForm />} />
            <Route path='login' element={<LoginForm />} />
            <Route path='signup' element={<SignUpForm />} />
            <Route
              path='dashboard'
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path='addExercise'
              element={
                <ProtectedRoute>
                  <AddExerciseForm />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </SessionProvider>
    </>
  );
}
