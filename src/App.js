import Homepage from "./page/homepage";
import Header from "./components/header";
import About from "./page/about";
import Patient from "./page/patient";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/patient" element={<Patient />} />
      </Routes>
    </>
  );
}

export default App;
