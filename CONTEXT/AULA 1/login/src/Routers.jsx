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
import AddressProvider from "./context/AddressContext"
import FormContatos from "./pages/contatos/FormContatos"

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
                                    <Route path='/cadastra-endereco/:idPessoa' element={<Address />}></Route>
                                    <Route path='/atualiza-endereco/:idPessoa/:idEndereco' element={<Address />}></Route>
                                    <Route path='/contatos/:idPessoa' element={<FormContatos />}></Route>
                                    <Route path='/atualiza-contato/:idPessoa/:idContato' element={<FormContatos />}></Route>
                                    <Route path='/pessoas' element={<PeopleDetails />}></Route>
                                    <Route path='/cadastra-pessoa' element={<PeopleForm />}></Route>
                                    <Route path='/atualiza-pessoa/:id' element={<PeopleForm />}></Route>

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

