import Topnav from "./components/admin/Topnav";
import Sidebar from "./components/admin/Sidebar";
import ThongKePage from "./pages/admin/ThongKe";
import DonHangPage from "./pages/admin/DonHang";
import KhachHangPage from "./pages/admin/KhachHang";
import SanPhamPage from "./pages/admin/SanPham";
import CuaHangPage from "./pages/admin/CuaHang";
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
              <Route path="/KhachHang" element={<KhachHangPage />}></Route>
              <Route path="/SanPham" element={<SanPhamPage />}></Route>
            </Routes>
        </div>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
