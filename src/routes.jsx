import Dashboard from "./components/dashboard";
import { Routes,Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";


function View() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>}></Route>
    </Routes>
  );
}

export default View