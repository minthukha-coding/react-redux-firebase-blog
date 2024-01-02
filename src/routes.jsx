import { Routes,Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Dashboard from './components/dashboard/index'
import ProjectDetails from "./components/project/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/project/CreateProject";

function View() {
  return (
    <Routes>
      <Route path='/' exact element={<Dashboard/>}></Route>
      <Route path='/project/:id' element={<ProjectDetails/>}></Route>
      <Route path='/project/:id' element={<ProjectDetails/>}></Route>
      <Route path='/signIn' element={<SignIn/>}></Route>
      <Route path='/signUp' element={<SignUp/>}></Route>
      <Route path='/createProject' element={<CreateProject/>}></Route>
    </Routes>
  );
}

export default View