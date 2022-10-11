import Topnav from "./components/admin/Topnav";
import Sidebar from "./components/admin/Sidebar";
import ThongKePage from "./pages/admin/ThongKe";
import { Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App" id="wrapper">
    <Router>
      <Sidebar></Sidebar>
      <div id="content-wrapper" className="d-flex flex-column">
        <div className="content">
          <Topnav></Topnav>
            <Routes>
              <Route path="/" element={<A/>}></Route>
              <Route path="/ThongKe" element={<ThongKePage />}></Route>
            </Routes>
        </div>
      </div>
      </Router>
    </div>
  );
}

export default App;
