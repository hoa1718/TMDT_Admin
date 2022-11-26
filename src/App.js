import Admin from "./Admin";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const basename = document.querySelector('base')?.getAttribute('href') ?? '/'
  return (
    <div className="App" id="wrapper">
      <BrowserRouter basename={basename} />
        <Routes>
            <Route path="/M/*" element={<Admin></Admin>}></Route>
            <Route path="/Login" element={<Login></Login>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
