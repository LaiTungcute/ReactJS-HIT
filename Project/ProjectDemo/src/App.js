import Home from "./pages/Home";
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Login from "./Login";

function App() {
  const isLogin = localStorage.getItem('isLogin');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Login" element={<Login />}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
