import { BrowserRouter } from 'react-router-dom'; // ✅
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
  //  <Home />
  // <Router>
  //   <Routes>
  //     <Route path="/" element={<Home />} />
  //     <Route path="/login" element={<Login />} />
  //     {/* <Route path="/daftar" element={<Daftar />} /> */}
  //   </Routes>
  // </Router>
  <BrowserRouter>
      <AppRoutes />
  </BrowserRouter>
  );
}

export default App;
