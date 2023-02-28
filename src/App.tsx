import React from 'react';
import './App.css';
import LoginForm from "./pages/login-form";
import RegForm from "./pages/regist-form";
import { Routes, Route } from "react-router-dom";

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
