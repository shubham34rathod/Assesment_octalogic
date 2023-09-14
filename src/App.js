import AddCourse from "./components/pages/AddCourse";
import Courses from "./components/pages/Courses";
import Login from "./components/pages/Login";
import Overview from "./components/pages/Overview";
import Register from "./components/pages/Register";
import Sidebra from "./components/pages/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login></Login>}></Route>
            <Route path="/overview" element={<Overview></Overview>}></Route>
            <Route path="/courses" element={<Courses></Courses>}></Route>
            <Route path="/addCourse" element={<AddCourse></AddCourse>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
          </Routes>
      </BrowserRouter>
  </>
}

export default App;
