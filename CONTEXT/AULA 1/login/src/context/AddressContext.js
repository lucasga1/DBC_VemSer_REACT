import { apiCep, apiDbc } from "../api";
import { useState, createContext, useContext } from 'react';
import { PeopleContext } from "./PeopleContext";
export const AddressContext = createContext();

function AddressProvider({ children }) {

    const { isUpdate, setIsUpdate } = useContext(PeopleContext)

    const [dataCep, setDataCep] = useState({});
    const [enderecoPessoa, setEnderecoPessoa] = useState([]);
    const [idEndereco, setIdEndereco] = useState();
    const [idPessoa, setIdPessoa] = useState();
  
    const irParaCadastroEndereco = (idPessoa) => {
        window.location.href = `/endereco/${idPessoa}`
    }

    const recebeIdAndNavega = (idEndereco, value, idPessoa) => {
        setIdPessoa(idPessoa)
        setIdEndereco(idEndereco)
        setIsUpdate(value)
        window.location.href = `/endereco/${idEndereco}`
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
            isUpdate,
            setIsUpdate,
            idPessoa,
            setIdPessoa,
            setIdEndereco,
            setDataCep,
            verificaCep,
            handleCreateAddress,
            getAddress,
            recebeIdAndNavega,
            irParaCadastroEndereco

        }} >
            {children}
        </AddressContext.Provider>
    )    
}
export default AddressProvider