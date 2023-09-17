//import logo from './logo.svg';
import './App.css';
import LoginForm from './components/Login';
import RegisterForm from './components/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/register" element={<RegisterForm/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
