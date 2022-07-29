import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useContext } from "react"
import Header from "./components/header/Header"
import Login from "./pages/login/Login"
import Users from "./pages/users/Users"
import Address from "./pages/address/Address"
import PeopleDetails from "./pages/people/PeopleDetails"
import PeopleForm from "./pages/people/PeopleForm"
import NotFound from "./pages/notFound/NotFound"
import AuthProvider, { AuthContext } from "./context/AuthContext.js"
import PeopleProvider from "./context/PeopleContext"
import Footer from "./components/footer/Footer"

function Routers() {
    
    const { auth } = useContext(AuthContext)

    return (
        <BrowserRouter>
            <AuthProvider>
                <PeopleProvider>
                    <Header />
                    <Routes>
                        {!auth ? (
                            <>
                                <Route path='/' element={<Login />}></Route>
                                <Route path='/usuarios' element={<Users />}></Route>
                            </>) : (
                            <>
                                <Route path='/endereco' element={<Address />}></Route>
                                <Route path='/pessoas' element={<PeopleDetails />}></Route>
                                <Route path='/cadastra-pessoa' element={<PeopleForm />}></Route>
                                <Route path='/atualiza-pessoa/:id' element={<PeopleForm />}></Route>
                            </>
                        )}

                        <Route path='*' element={<NotFound />}></Route>
                    </Routes>
                    <Footer />
                </PeopleProvider>
            </AuthProvider>
        </BrowserRouter >
    )
}
export default Routers