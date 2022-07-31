import { apiCep, apiDbc } from "../api";
import { useState, createContext, useContext } from 'react';
import { PeopleContext } from "./PeopleContext";

export const AddressContext = createContext();

function AddressProvider({ children }) {

    const [dataCep, setDataCep] = useState({});
    const [id, setId] = useState();
    console.log(id)


    const handleCreateAddress = async () => {    
        try {
            await apiDbc.post(`/endereco/${id}`)
        } catch (error) {
            console.log(error)
        }
    }
   
    const irParaEndereco = (idPessoa) => {
        setId(idPessoa)
        window.location.href = `/endereco/${idPessoa}`
    }


    const verificaCep = async (value, ) => {       
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
            setDataCep,
            verificaCep,
            handleCreateAddress,
            irParaEndereco
        }} >
            {children}
        </AddressContext.Provider>
    )
}
export default AddressProvider