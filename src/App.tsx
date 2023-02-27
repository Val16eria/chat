import React from 'react';
import './App.css';
import Authorization from "./pages/auth-page/Authorization";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App: React.FC = () => {
  return (
    <div>
      <Authorization/>
    </div>
  );
}

export default App;
