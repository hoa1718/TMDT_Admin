import Topnav from './components/admin/Topnav';
import Sidebar from './components/admin/Sidebar';
function App() {
  return (
    <div className="App" >
     <Sidebar></Sidebar> 
     <div className='content-wrapper'>
       <div className='content'>
         <Topnav></Topnav>
       </div>
     </div>
    </div>
  );
}

export default App;
