import { Routes, Route } from "react-router-dom";
import SignIn from "../src/pages/login";
import Home from "./pages/home";


function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
    
    </Routes>
  );
}

export default App;
