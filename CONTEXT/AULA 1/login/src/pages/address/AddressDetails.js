
import { apiDbc } from "../../api";
import { useEffect, useState } from "react";
import { Div } from "./AddressDetails.styled"


function AddressDetails() {
    const [enderecos, setEnderecos] = useState([])
  
    const getEnderecosTotal = async () => {
        try {
            const { data } = await apiDbc.get('/endereco/212')
            setEnderecos(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getEnderecosTotal()
    },[])

    return (
        <>
            {enderecos.map(({ tipo, logradouro, numero, complemento, cep, cidade, estado, pais, idEndereco }) => (
                <Div key={idEndereco}>
                    <div>
                        <div>
                            <li>Tipo {console.log(tipo)}</li>
                            <li>Logradouro {logradouro}</li>
                            <li>Numero{numero}</li>
                            <li>Complemento{complemento}</li>
                            <li>CEP{cep}</li>
                            <li>Cidade{cidade}</li>
                            <li>Estado{estado}</li>
                            <li>Pais{pais}</li>
                            <li>Id{idEndereco}</li>
                        </div>
                    </div>
                </Div>
            ))}
        </>
    )
}
export default AddressDetails