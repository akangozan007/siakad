import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from '../pages/home/home';
import Login from '../pages/login/Login';
import Daftar from '../pages/daftar/Daftar';
import Loader from '../loader/Loader';
import '../loader/Loader.css';

export default function AppRoutes() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Tampilkan loader setiap kali lokasi berubah
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 800); // waktu tampil loader (ms), bisa kamu atur

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/daftar" element={<Daftar />} />
      </Routes>
    </>
  );
}
