import "./App.css";
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/single";
import Write from "./pages/write/write";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import "font-awesome/css/font-awesome.min.css"

function App() {
  const { user } = useContext(Context);
  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Login />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </>
  );
}

export default App;
