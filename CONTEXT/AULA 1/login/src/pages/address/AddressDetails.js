import { useContext } from "react"
import { AddressContext } from "../../context/AddressContext"
import { Div } from "./AddressDetails.styled"


function AddressDetails() {

    const { enderecoPessoa } = useContext(AddressContext);
    console.log(enderecoPessoa)

    return (
        <>
            {enderecoPessoa.map(({ tipo, logradouro, numero, complemento, cep, cidade, estado, pais, idEndereco }) => (
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