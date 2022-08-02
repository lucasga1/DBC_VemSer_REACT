import { Formik } from "formik";
import { useContext, } from "react";
import { useParams } from "react-router-dom";
import MaskedInput from "react-text-mask";
import { ButtonSecundary } from "../../components/button/ButtonPrimary";
import { maskCep } from "../../consts";
import { AddressContext } from "../../context/AddressContext";
import { ContainerForm, DivForm } from "./Address.styled";


const Address = () => {

  const { verificaCep, handleCreateAddress, handleUpdateAddress, dataCep, isAddressUpdate, idPessoa } = useContext(AddressContext);
  const { id } = useParams()

  console.log(idPessoa)
  console.log(isAddressUpdate)
  
  return (
    <Formik
      initialValues={{
        tipo: '',
        logradouro: '',
        numero: '',
        complemento: '',
        cep: '',
        cidade: '',
        estado: '',
        pais: ''
      }}
      onSubmit={(values) => {
        const enviaApi = {
          idPessoa: parseInt(idPessoa),
          tipo: values.tipo.toUpperCase(),
          logradouro: dataCep.logradouro,
          numero: values.numero,
          complemento: values.complemento,
          cep: values.cep.replace(/[^0-9]/gi, ''),
          cidade: dataCep.localidade,
          estado: dataCep.uf,
          pais: values.pais
        }
        console.log(enviaApi)
        isAddressUpdate ? handleUpdateAddress(enviaApi, id) : handleCreateAddress(enviaApi, id);
      }}
    >

      {props => (
        <ContainerForm>
          <div>
            <h1>Insira seus dados do seu endereço</h1>
          </div>
          <DivForm>
            <form onSubmit={props.handleSubmit}>
              <label htmlFor="cep">CEP*</label>
              <MaskedInput
                mask={maskCep}
                id="cep"
                name="cep"
                type="text"
                placeholder="CEP"
                onBlur={() => verificaCep(props.values.cep)}
                onChange={props.handleChange}
                value={props.values.cep}
              />
              <label htmlFor="logradouro">Logradouro*</label>
              <input
                id="logradouro"
                name="logradouro"
                type="text"
                placeholder="Logradouro"
                onChange={props.handleChange}
                value={dataCep.logradouro}
              />
              <label htmlFor="cidade">Cidade*</label>
              <input
                id="cidade"
                name="cidade"
                type="text"
                placeholder="Cidade"
                onChange={props.handleChange}
                value={dataCep.localidade}
              />
              <label htmlFor="estado">Estado*</label>
              <input
                id="estado"
                name="estado"
                type="text"
                placeholder="Estado"
                onChange={props.handleChange}
                value={dataCep.uf}
              />
              <label htmlFor="tipo">Tipo*</label>
              <input
                id="tipo"
                name="tipo"
                type="select"
                placeholder="Tipo"
                onChange={props.handleChange}
                value={props.values.tipo}
              />
              <label htmlFor="complemento">Complemento</label>
              <input
                id="complemento"
                name="complemento"
                type="text"
                placeholder="Complemento"
                onChange={props.handleChange}
                value={props.values.complemento}
              />
              <label htmlFor="numero">Número*</label>
              <input
                id="numero"
                name="numero"
                type="text"
                placeholder="Número"
                onChange={props.handleChange}
                value={props.values.numero}
              />
              <label htmlFor="pais">Pais*</label>
              <input
                id="pais"
                name="pais"
                type="text"
                placeholder="Pais"
                onChange={props.handleChange}
                value={props.values.pais}
              />
              <div>
                <ButtonSecundary type="submit">{isAddressUpdate ? 'Atualizar' : 'Cadastrar'}</ButtonSecundary>
              </div>
            </form>
          </DivForm>
        </ContainerForm>
      )
      }
    </Formik >
  )
}

export default Address