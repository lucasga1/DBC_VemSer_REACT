import { BrowserRouter, Routes, Route } from "react-router-dom"
import Users from "./pages/Users"
import Login from "./pages/Login"
import AuthContext from "./context/AuthContext.js"

function Routers() {
    return (
        <BrowserRouter>
            <AuthContext>
                <Routes>
                    <Route path='/' element={<Login />}></Route>
                    <Route path='/usuario' element={<Users />}></Route>
                </Routes>
            </AuthContext>
        </BrowserRouter>
    )
}
export default Routers