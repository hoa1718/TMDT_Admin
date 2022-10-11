import Topnav from "./components/admin/Topnav";
import Sidebar from "./components/admin/Sidebar";
import ThongKePage from "./pages/admin/ThongKe";
import DonHangPage from "./pages/admin/DonHang";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App" id="wrapper">
    <BrowserRouter>
      <Sidebar></Sidebar>
      <div id="content-wrapper" className="d-flex flex-column">
        <div className="content">
          <Topnav></Topnav>
            <Routes>
              <Route path="/" element={<ThongKePage/>}></Route>
              <Route path="/ThongKe" element={<ThongKePage />}></Route>
              <Route path="/DonHang" element={<DonHangPage />}></Route>
            </Routes>
        </div>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;