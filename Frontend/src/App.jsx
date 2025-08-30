import LandingPage from "./Components/LandPage"
import Login from "./Components/Login"
import { Routes, Route } from 'react-router-dom';
import UserDashBoard from "./Components/UserDashBoard";
import Buyer from "c:/Users/HP/AppData/Local/Microsoft/Windows/INetCache/IE/B4119GPK/buyer[1]";


function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/user/buyer" element={<Buyer/>}/>
          <Route path="/user/dashboard" element={<UserDashBoard/>} />
          {/* Handle 404 Not Found pages */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
    </>
  )
}

export default App
