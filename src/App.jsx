import { useSelector } from "react-redux";
import Sidebar from "./components/Sidebar";
import { Button, TextField, Typography } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import CatLanding from "./pages/CatLanding";
import "./App.css";

function App() {
  const privacy = useSelector((store) => store.privacy);

  return (
    <>
      

      <Sidebar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/category/:categoryName" element={<CatLanding />} />
        </Routes>
      </BrowserRouter>
      </Sidebar>
    </>
  );
}

export default App;
