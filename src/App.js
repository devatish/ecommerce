import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import UserContext from './constext/UserContext';
import AuthBase from './pages/auth/AuthBase';
import PanelBase from './pages/panel/PanelBase';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [showloader, setShowloader] = useState(true);
  return (
    <>
      <UserContext.Provider value={{ isLogin, setIsLogin, setShowloader }}>
        <div className="siteloader" style={{ display: (showloader) ? 'fixed' : 'none' }}><div className='loader'></div></div>
        <Routes>
          <Route path='/*' element={isLogin ? <PanelBase /> : <AuthBase />} />
          <Route path='/auth/*' element={isLogin ? <PanelBase /> : <AuthBase />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
