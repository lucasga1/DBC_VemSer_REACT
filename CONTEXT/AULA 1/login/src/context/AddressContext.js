import { apiCep, apiDbc } from "../api";
import { useState, createContext, useEffect } from 'react';
export const AddressContext = createContext();

function AddressProvider({ children }) {

    const [dataCep, setDataCep] = useState({});
    const [idParams, setIdParams] = useState();
    const [enderecoPessoa, setEnderecoPessoa] = useState([]);
    const [idEndereco, setIdEndereco] = useState();

    const [isUpdate, setIsUpdate] = useState(false);
    console.log(isUpdate)


    const recebeIdAndNavega = (idEndereco, value) => {
        setIsUpdate(value)
        setIdEndereco(idEndereco)
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

    const handleCreateAddress = async (values) => {
        try {
            await apiDbc.post(`/endereco/{idPessoa}?idPessoa=${idParams}`, values)
            window.location.href = `/pessoas`
        } catch (error) {
            console.log(error)
        }
    }

    const handleUpdateAddress = async (value, id) => {
        try {
            await apiDbc.put(`/endereco/${id}`, value)
            window.location.href = '/pessoas'
        } catch (error) {
            console.log(error)
        }
    }

    const verificaCep = async (value, id) => {
        try {
            const { data } = await apiCep.get(`/${value}/json`);
            setDataCep(data);
            setIdParams(id)
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
            setIdEndereco,
            setDataCep,
            verificaCep,
            handleCreateAddress,
            getAddress,
            handleUpdateAddress,
            recebeIdAndNavega

        }} >
            {children}
        </AddressContext.Provider>
    )
}
export default AddressProvider