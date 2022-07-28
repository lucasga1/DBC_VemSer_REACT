import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/header/Header"
import Login from "./pages/login/Login"
import Users from "./pages/users/Users"
import People from "./pages/people/People"
import Address from "./pages/address/Address"
import Footer from "./components/footer/Footer"
import NotFound from "./pages/notFound/NotFound"
import AuthProvider, { AuthContext } from "./context/AuthContext.js"
import { useContext } from "react"

function Routers() {
    const { auth } = useContext(AuthContext)

    return (
        <BrowserRouter>
            <AuthProvider>
                <Header />
                <Routes>
                    {!auth ? (
                        <>
                            <Route path='/' element={<Login />}></Route>
                            <Route path='/usuarios' element={<Users />}></Route>
                        </>) : (
                        <>
                            <Route path='/pessoas' element={<People />}></Route>
                            <Route path='/endereco' element={<Address />}></Route>
                        </>
                    )}

                    <Route path='*' element={<NotFound />}></Route>
                </Routes>
                <Footer />
            </AuthProvider>
        </BrowserRouter >
    )
}
export default Routers