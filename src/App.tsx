import { Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import PageLayout from './pages/PageLayout';
import Dashboard from './pages/dashboard/Dashboard';
import './index.css';

export default function App() {

  return (
    <>
      <Routes>
        <Route element ={<PageLayout/>}>
          <Route path="/" element={<LoginForm/>}/>
          <Route path="login" element={<LoginForm/>}/>
          <Route path="dashboard" element={<Dashboard/>}/>
        </Route>
      </Routes>
    </>
  );
}

