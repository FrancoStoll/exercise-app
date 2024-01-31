import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./componentes/Navbar";
import ExcerciseDetail from "./pages/ExcerciseDetail";
import Home from "./pages/Home";
import Footer from "./componentes/Footer";

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExcerciseDetail />} />
      </Routes>

      <Footer />
    </Box>
  );
}

export default App;
