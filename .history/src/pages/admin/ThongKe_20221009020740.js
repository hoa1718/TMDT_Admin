function ThongKe() {
    return (
      <div className="App" id='wrapper'>
       <Sidebar></Sidebar> 
       <div id='content-wrapper' className="d-flex flex-column">
         <div className='content'>
           <Topnav></Topnav>
         </div>
       </div>
      </div>
    );
  }
  
  export default ThongKe;