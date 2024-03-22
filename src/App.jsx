import { useSelector } from "react-redux";
import "./App.css";
import CounterBtn from "./components/Button";
import DisplayCounter from "./components/DisplayCounter";
import Header from "./components/Header";
import PrivacyMessage from "./components/PrivacyMessage";
import Sidebar from "./components/Sidebar";
import { Button, TextField, Typography } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import CatLanding from "./pages/CatLanding";

function App() {
  const privacy = useSelector((store) => store.privacy);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/category/:categoryName" element={<CatLanding />} />
        </Routes>
      </BrowserRouter>

      <Sidebar />
    </>
  );
}

export default App;
