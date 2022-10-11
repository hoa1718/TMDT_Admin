import "./style.css";
import ThongKePage from "../../pages/admin/ThongKe";
import logo from "../../logo.png";
import { Routes, Route,Link } from "react-router-dom";
function Sidebar(props) {
  const toggleSidebar = () => {
    document.body.classList.toggle("sidebar-toggled");
    document.querySelector(".sidebar").classList.toggle("toggled");
    if (document.querySelector(".sidebar").classList.contains("toggled")) {
      document.querySelector(".sidebar .collapse").collapse("hide");
    }
  };
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* Sidebar - Brand */}
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <img src={logo} className="sidebar-logo"></img>
        </div>
        <div className="sidebar-brand-text mx-3">PHK Figure</div>
      </a>
      {/* Divider */}
      <hr className="sidebar-divider my-0" />
      {/* Nav Item - Dashboard */}
      <li className="nav-item active">
        <Link className="nav-link" to="/ThongKe">
          <i class="fas fa-solid fa-chart-simple"></i>
          <span>Thống kê</span>
        </Link>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider my-0" />
      {/* Heading */}
      <li className="nav-item active">
        <a className="nav-link" href="#">
          <i class="fas fa-sharp fa-solid fa-scroll"></i>
          <span>Đơn hàng</span>
        </a>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider my-0" />
      {/* Heading */}
      <li className="nav-item active">
        <a className="nav-link" href="#">
          <i className="fas fa-boxes"></i>
          <span>Sản phẩm</span>
        </a>
      </li>
      <hr className="sidebar-divider my-0" />
      {/* Heading */}
      <li className="nav-item active">
        <a className="nav-link" href="#">
          <i className="fas fa-users"></i>
          <span>Khách hàng</span>
        </a>
      </li>
      <hr className="sidebar-divider my-0" />
      {/* Heading */}
      <li className="nav-item active">
        <a className="nav-link" href="#">
          <i className="fas fa-store"></i>
          <span>Giới thiệu cửa hàng</span>
        </a>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider d-none d-md-block" />
      {/* Sidebar Toggler (Sidebar) */}
      <div className="text-center d-none d-md-inline">
        <button
          className="rounded-circle border-0"
          id="sidebarToggle"
          onClick={toggleSidebar}
        />
      </div>
      <Routes> 
        <Route path="/ThongKe" element={<ThongKePage />} ></Route>
      </Routes>
    </ul>
  );
}

export default Sidebar;
