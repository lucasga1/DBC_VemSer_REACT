import { Formik } from "formik";
import { useContext, useEffect, useState } from "react";
import { ButtonSecundary } from "../../components/button/ButtonPrimary";
import { AddressContext } from "../../context/AddressContext";
import { ContainerForm, DivForm } from "./Address.styled";

const Address = () => {

  const { verificaCep, handleCreateAddress, dataCep } = useContext(AddressContext);
 

  if(!dataCep){
    return
  }

  return (
    <Formik
      initialValues={{
        tipo: '',
        logradouro: dataCep.logradouro ? dataCep.logradouro : '',
        numero: '',
        complemento: '',
        cep: '',
        cidade: dataCep.localidade ? dataCep.localidade : '',
        estado: dataCep.uf ? dataCep.uf : '',
        pais: ''
      }}
      onSubmit={(values) => {
        
        if (verificaCep(values.cep)) {
          console.log(dataCep)
        }
      }}
    >

      {props => (
        <ContainerForm>
          <div>
            <h1>Insira seus dados do seu endereço</h1>
          </div>
          <form onSubmit={props.handleSubmit}>
            <DivForm>
              <label htmlFor="tipo">Tipo</label>
              <input
                id="tipo"
                name="tipo"
                type="text"
                placeholder="Tipo"
                onChange={props.handleChange}
                value={props.values.tipo}
              />
              <br />
              <label htmlFor="logradouro">Logradouro</label>
              <input
                id="logradouro"
                name="logradouro"
                type="text"
                placeholder="Logradouro"
                onChange={props.handleChange}
                value={dataCep.logradouro}
              />
              <br />
              <label htmlFor="numero">Número</label>
              <input
                id="numero"
                name="numero"
                type="text"
                placeholder="Número"
                onChange={props.handleChange}
                value={props.values.numero}
              />
              <br />
              <label htmlFor="complemento">Complemento</label>
              <input
                id="complemento"
                name="complemento"
                type="text"
                placeholder="Complemento"
                onChange={props.handleChange}
                value={props.values.complemento}
              />
              <br />
              <label htmlFor="cep">CEP</label>
              <input
                id="cep"
                name="cep"
                type="text"
                placeholder="CEP"
                onChange={props.handleChange}
                value={props.values.cep}
              />
              <br />
              <label htmlFor="cidade">Cidade</label>
              <input
                id="cidade"
                name="cidade"
                type="text"
                placeholder="Cidade"
                onChange={props.handleChange}
                value={dataCep.localidade}
              />
              <br />
              <label htmlFor="estado">Estado</label>
              <input
                id="estado"
                name="estado"
                type="text"
                placeholder="Estado"
                onChange={props.handleChange}
                value={dataCep.uf}
              />
              <br />
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
                <ButtonSecundary type="submit">Procurar pelo CEP</ButtonSecundary>
                <ButtonSecundary type="submit">Cadastrar Endereço</ButtonSecundary>
              </div>
            </DivForm>
          </form>
        </ContainerForm>
      )}
    </Formik >
  )
}

export default Address