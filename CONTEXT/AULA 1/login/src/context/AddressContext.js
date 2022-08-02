import { apiCep, apiDbc } from "../api";
import { useState, createContext } from 'react';

export const AddressContext = createContext();

function AddressProvider({ children }) {

    const [enderecoPessoa, setEnderecoPessoa] = useState([]);
    const [dataCep, setDataCep] = useState({});
    const [idPessoa, setIdPessoa] = useState();


    const getAddress = async (idPessoaa) => {
        try {
            const { data } = await apiDbc.get(`/endereco/retorna-por-id-pessoa?idPessoa=${idPessoaa}`)
            setEnderecoPessoa(data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleCreateAddress = async (values, id) => {
        try {
            await apiDbc.post(`/endereco/{idPessoa}?idPessoa=${id}`, values)
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

    const handleUpdateAddress = async (idEndereco, value) => {
        try {
            await apiDbc.put(`/endereco/${idEndereco}`, value)
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

    const mudarParaCadastroAtualizar = (idEndereco, valueidPessoa) => {
        window.location.href = `/atualiza-endereco/${valueidPessoa}/${idEndereco}`
    }

    const irParaCadastroEndereco = (valuesidPessoa) => {
        window.location.href = `/cadastra-endereco/${valuesidPessoa}`
    }
    
    return (
        <AddressContext.Provider value={{
            dataCep,
            enderecoPessoa,
            idPessoa,
            mudarParaCadastroAtualizar,
            verificaCep,
            handleCreateAddress,
            handleUpdateAddress,
            setIdPessoa,
            setDataCep,
            getAddress,
            irParaCadastroEndereco,
            handleDeleteAddress
        }} >
            {children}
        </AddressContext.Provider>
    )
}
export default AddressProvider