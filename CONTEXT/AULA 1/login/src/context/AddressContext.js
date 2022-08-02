import { apiCep, apiDbc } from "../api";
import { useState, createContext, useContext, useEffect } from 'react';
export const AddressContext = createContext();

function AddressProvider({ children }) {

    const [enderecoPessoa, setEnderecoPessoa] = useState([]);
    const [dataCep, setDataCep] = useState({});
    const [idEndereco, setIdEndereco] = useState();
    const [idPessoa, setIdPessoa] = useState();
    const [isAddressUpdate, setIsAddressUpdate] = useState(false);

    console.log(idPessoa)
    console.log(idEndereco)
    console.log(isAddressUpdate)

    const irParaCadastroEndereco = (idPessoa) => {
        /* setIsAddressUpdate(false) */
        window.location.href = `/endereco/${idPessoa}`
    }

    const getAddress = async (idPessoa) => {
        try {
            const { data } = await apiDbc.get(`/endereco/retorna-por-id-pessoa?idPessoa=${idPessoa}`)
            setEnderecoPessoa(data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleCreateAddress = async (values, id) => {
        try {
            const { data } = await apiDbc.post(`/endereco/{idPessoa}?idPessoa=${id}`, values)
            console.log(data)
            console.log(id)
            window.location.href = `/pessoas`
        } catch (error) {
            console.log(error)
        }
    }

    const handleDeleteAddress = async (idEndereco) => {
        try {
            await apiDbc.delete(`/endereco/${idEndereco}`)
            getAddress(idPessoa)

        } catch (error) {
            console.log(error)
        }
    }

    const mudarParaCadastroAtualizar = (idEndereco) => {
        setIsAddressUpdate(true)
        window.location.href = `/endereco/${idEndereco}`        
    }

    const verificaCep = async (value) => {
        try {
            const { data } = await apiCep.get(`/${value}/json`);
            setDataCep(data);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AddressContext.Provider value={{
            dataCep,
            enderecoPessoa,
            mudarParaCadastroAtualizar,
            verificaCep,
            handleCreateAddress,

            idPessoa,
            setIdPessoa,
            setIdEndereco,
            setDataCep,
            getAddress,
            isAddressUpdate,            
            irParaCadastroEndereco,
            handleDeleteAddress
        }} >
            {children}
        </AddressContext.Provider>
    )
}
export default AddressProvider