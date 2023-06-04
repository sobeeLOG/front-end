import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Feed from "../../pages/Feed";
import MyCalendar from "../../pages/MyCalendar";
import Friend from "../../pages/Friend";
import Setting from "../../pages/Setting";
import Join from "../../pages/Join";
import Login from "../../pages/Login";
import Profile from "../../pages/Profile";
import ChangePwd from "../../pages/ChangePwd";

function Router(){
    return (
        <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/join" element={<Join />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/calendar" element={<MyCalendar />} />
            <Route path="/friend" element={<Friend />} />
            <Route path="/setting" element={<Setting/>} />
            <Route path="/changepwd" element={<ChangePwd/>} />
         </Routes>
        </BrowserRouter>
    )
}

export default Router;