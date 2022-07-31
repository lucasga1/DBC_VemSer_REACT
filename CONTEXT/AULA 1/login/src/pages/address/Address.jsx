import { Formik } from "formik";
import { useContext, } from "react";
import { useParams } from "react-router-dom";
import { ButtonSecundary } from "../../components/button/ButtonPrimary";
import { AddressContext } from "../../context/AddressContext";
import { ContainerForm, DivForm } from "./Address.styled";

const Address = () => {

  const { verificaCep, handleCreateAddress, dataCep } = useContext(AddressContext);
  const { id } = useParams()
  if (!dataCep) {
    return
  }
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
          idPessoa: parseInt(id),
          tipo: values.tipo.toUpperCase(),
          logradouro: dataCep.logradouro,
          numero: parseInt(values.numero),
          complemento: values.complemento,
          cep: values.cep,
          cidade: dataCep.localidade,
          estado: dataCep.uf,
          pais: values.pais
        }
        console.log(enviaApi)
        handleCreateAddress(enviaApi)
      }}
    >

      {props => (
        <ContainerForm>
          <div>
            <h1>Insira seus dados do seu endereço</h1>
          </div>
          <DivForm>
            <form onSubmit={props.handleSubmit}>
              <label htmlFor="tipo">Tipo</label>
              <input
                id="tipo"
                name="tipo"
                type="text"
                placeholder="Tipo"
                onChange={props.handleChange}
                value={props.values.tipo}
              />
              <label htmlFor="logradouro">Logradouro</label>
              <input
                id="logradouro"
                name="logradouro"
                type="text"
                placeholder="Logradouro"
                onChange={props.handleChange}
                value={dataCep.logradouro}
              />
              <label htmlFor="numero">Número</label>
              <input
                id="numero"
                name="numero"
                type="text"
                placeholder="Número"
                onChange={props.handleChange}
                value={props.values.numero}
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
              <label htmlFor="cep">CEP</label>
              <input
                id="cep"
                name="cep"
                type="text"
                placeholder="CEP"
                onChange={props.handleChange}
                value={props.values.cep}
              />
              <label htmlFor="cidade">Cidade</label>
              <input
                id="cidade"
                name="cidade"
                type="text"
                placeholder="Cidade"
                onChange={props.handleChange}
                value={dataCep.localidade}
              />
              <label htmlFor="estado">Estado</label>
              <input
                id="estado"
                name="estado"
                type="text"
                placeholder="Estado"
                onChange={props.handleChange}
                value={dataCep.uf}
              />
              <label htmlFor="pais">Pais</label>
              <input
                id="pais"
                name="pais"
                type="text"
                placeholder="Pais"
                onChange={props.handleChange}
                value={props.values.pais}
              />
              <div>
                <ButtonSecundary type="submit">Cadastrar Endereço</ButtonSecundary>
              </div>
            </form>
            <div>
              <ButtonSecundary onClick={() => verificaCep(props.values.cep, id)}>Procurar pelo CEP</ButtonSecundary>
            </div>
          </DivForm>
        </ContainerForm>
      )
      }
    </Formik >
  )
}

export default Address