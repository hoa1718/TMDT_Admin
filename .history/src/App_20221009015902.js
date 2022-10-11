import Topnav from './components/admin/Topnav';
import Sidebar from './components/admin/Sidebar';
function App() {
  return (
    <div className="App" id='wrapper'>
     <Sidebar></Sidebar> 
     <div className='content-wrapper' class="d-flex flex-column">
       <div className='content'>
         <Topnav></Topnav>
       </div>
     </div>
    </div>
  );
}

export default App;
