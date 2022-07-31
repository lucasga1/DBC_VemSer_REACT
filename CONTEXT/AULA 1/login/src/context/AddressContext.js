import { apiCep, apiDbc } from "../api";
import { useState, createContext } from 'react';
export const AddressContext = createContext();

function AddressProvider({ children }) {

    const [dataCep, setDataCep] = useState({});
    const [idParams, setIdParams] = useState();
    console.log(idParams)

    const handleCreateAddress = async () => {
        try {
            await apiDbc.post(`/endereco/{idPessoa}?idPessoa=${idParams}`)
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
            setDataCep,
            verificaCep,
            handleCreateAddress,

        }} >
            {children}
        </AddressContext.Provider>
    )
}
export default AddressProvider