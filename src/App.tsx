import { Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import PageLayout from './pages/PageLayout';
import './index.css';

export default function App() {

  return (
    <>
      <Routes>
        <Route element ={<PageLayout/>}>
          <Route path="/" element={<LoginForm/>}/>
          <Route path="login" element={<LoginForm/>}/>
        </Route>
      </Routes>
    </>
  );
}

