import { Routes,Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Dashboard from './components/dashboard/index'

function View() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>}></Route>
    </Routes>
  );
}

export default View