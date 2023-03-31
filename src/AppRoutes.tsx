import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Report from "./pages/Report";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Header/>
      <Sidebar/>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/dash" element={ <Dashboard/> }/>
        <Route path="/registers" element={ <Register/> }/>
        <Route path="/reports" element={ <Report/> }/>
      </Routes>
    </BrowserRouter>
  )
}