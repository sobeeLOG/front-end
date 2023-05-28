import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Calendar } from "../calendar/Calendar";

function Router(){
    return (
        <BrowserRouter>
         <Routes>
            <Route path="/calendar" element={<Calendar />} />
         </Routes>
        </BrowserRouter>
    )
}

export default Router;