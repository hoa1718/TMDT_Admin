import HomePage from "./pages/client/Home";
import {Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App" id="wrapper">
        <Routes>
            <Route path="/M/*" element={<Admin></Admin>}></Route>
            <Route path="/Login" element={<Login></Login>}></Route>
        </Routes>
    </div>
  );
}