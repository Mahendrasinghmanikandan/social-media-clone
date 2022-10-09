import Login from "./components/account/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/account/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Myuploads from "./components/Uploads/Myuploads";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route
          path="/Uploads"
          element={
            <>
              <Myuploads />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
