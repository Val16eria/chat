import React from 'react';
import { Routes, Route } from "react-router-dom";
import LoginForm from "./pages/login-form";
import RegForm from "./pages/regist-form";
import './App.css';

const App: React.FC = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/reg" element={<RegForm />} />
        </Routes>
    </div>
  );
}

export default App;
