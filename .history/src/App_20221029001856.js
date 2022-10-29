import Admin from "./Admin";import Login from "./Login";
import Client from "./Client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App" id="wrapper">
      <BrowserRouter>
        <Routes>
            <Route path="/M/*" element={<Admin></Admin>}></Route>
            
            <Route path="/*" element={<Client></Client>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
