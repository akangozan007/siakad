// src/routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import Login from '../pages/login/Login';
// import Daftar from '../pages/Daftar';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/daftar" element={<Daftar />} /> */}
    </Routes>
  );
}
