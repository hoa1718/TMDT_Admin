import Topnav from './components/admin/Topnav';
import Sidebar from './components/admin/Sidebar';
import {Router,Routes, Route,Link } from "react-router-dom";
function App() {
  return (
    <div className="App" id='wrapper'>
     <Sidebar></Sidebar> 
     <div id='content-wrapper' className="d-flex flex-column">
       <div className='content'>
         <Topnav></Topnav>
         <Router>
        <Routes> 
           <Route path="/ThongKe" element={<ThongKePage />} ></Route>
      </Routes>
      </Router>
       </div>
     </div>
    </div>
  );
}

export default App;
