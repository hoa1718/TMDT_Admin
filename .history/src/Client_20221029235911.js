import HomePage from "./pages/client/Home";
import {Routes, Route } from "react-router-dom";
import Header from "./components/client/Header";
import './style/Client.'
function App() {
  return (
    <>
        <Header></Header>
        <Routes>
            <Route path="/*">
              <Route index path="TrangChu" element={<HomePage></HomePage>} ></Route>
            </Route>
        </Routes>
    </>
  );
}
export default App;