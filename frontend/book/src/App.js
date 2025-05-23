import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Index from "./components/index/Index";
import Navbar from "./components/navbar/Navbar";


function App() {
  return (
   <Router>
    <Main />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/index" element={<Index />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </Router>
  );
}

function Main() {
  const location = useLocation();

  // Only show the Navbar if the current path is not "/"
 const hideNavbarRoutes = ["/", "/login", "/signup"];
 const showNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index" element={<Index />} />
      </Routes>
    </>
  );
}

export default App;
