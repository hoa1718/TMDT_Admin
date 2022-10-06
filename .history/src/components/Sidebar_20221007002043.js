import logo from '../logo.png'
function Sidebar(props) {
    return (
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <a href="index3.html" className="brand-link">
    <img src={logo} alt="Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">PHK Figure</span>
  </a>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="../logo.png" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <a href="#" className="d-block">PHK Figure</a>
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" >
        {/* Add icons to the links using the .nav-icon class
       with font-awesome or any other icon font library */}

        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>
              Simple Link
            </p>
          </a>
        </li>
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>

    );
  }
  
  export default Sidebar;