import HomePage from "./pages/client/Home";
import {Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
        <Routes>
            <Route path="/*">
              <Route index path="TrangChu" element={<} ></Route>
            </Route>
        </Routes>
    </>
  );
}