import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Header/>
      <Sidebar/>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/dash" element={ <Dashboard/> }/>
      </Routes>
    </BrowserRouter>
  )
}