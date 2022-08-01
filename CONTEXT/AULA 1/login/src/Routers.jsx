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
import AddressProvider from "./context/AddressContext"
import AddressDetails from "./pages/address/AddressDetails"

function Routers() {

    const { auth } = useContext(AuthContext)

    return (
        <BrowserRouter>
            <AuthProvider>
                <PeopleProvider>
                    <AddressProvider>
                        {!auth ? '' : <Header />}
                        <Routes>
                            {!auth ? (
                                <>
                                    <Route path='/' element={<Login />} style={{ backgroundColor: 'gray' }}></Route>
                                    <Route path='/usuarios' element={<Users />}></Route>
                                </>) : (
                                <>
                                    <Route path='/endereco/:id' element={<Address />}></Route>
                                    <Route path='/pessoas' element={<PeopleDetails />}></Route>
                                    <Route path='/cadastra-pessoa' element={<PeopleForm />}></Route>
                                    <Route path='/atualiza-pessoa/:id' element={<PeopleForm />}></Route>
                                    <Route path='/enderecos' element={<AddressDetails />}></Route>

                                </>
                            )}

                            <Route path='*' element={<NotFound />}></Route>
                        </Routes>
                    </AddressProvider>
                </PeopleProvider>
            </AuthProvider>
        </BrowserRouter >
    )
}
export default Routers