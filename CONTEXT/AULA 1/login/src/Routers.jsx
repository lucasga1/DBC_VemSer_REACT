import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/header/Header"
import Login from "./pages/login/Login"
import Users from "./pages/users/Users"
import People from "./pages/people/People"
import Address from "./pages/address/Address"
import Footer from "./components/footer/Footer"
import AuthContext from "./context/AuthContext.js"

function Routers() {
    return (
        <BrowserRouter>
            <AuthContext>
                <Header />
                <Routes>
                    <Route path='/' element={<Login />}></Route>
                    <Route path='/usuarios' element={<Users />}></Route>
                    <Route path='/pessoas' element={<People />}></Route>
                    <Route path='/endereco' element={<Address />}></Route>
                </Routes>
                <Footer />
            </AuthContext>
        </BrowserRouter>
    )
}
export default Routers