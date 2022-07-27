import { useFormik } from "formik";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { IMaskInput } from "react-imask";

const Address = () => {

  const { verificaToken, verificaCep, dataCep } = useContext(AuthContext);
  const [cep, setCep] = useState({})

  const formik = useFormik({
    initialValues: {
      tipo: '',
      logradouro: '',
      numero: '',
      complemento: '',
      cep: '',
      cidade: '',
      estado: '',
      pais: ''
    },

    onSubmit: (values) => {
      setCep(values.cep)      

      const cepSemPonto = cep.split('.');
      const cepSemTraco = cepSemPonto[1].split('-')
      const cepFormatado = cepSemPonto[0] + cepSemTraco[0] + cepSemTraco[1];
      
      verificaCep(cepFormatado);      
    }
  })

  useEffect(() => {
    verificaToken();
  })

  return (

    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="tipo">Tipo</label>
      <input
        id="tipo"
        name="tipo"
        type="text"
        placeholder="Tipo"
        onChange={formik.handleChange}
        value={formik.values.tipo}
      />
      <br />
      <label htmlFor="logradouro">Logradouro</label>
      <input
        id="logradouro"
        name="logradouro"
        type="text"
        placeholder="Logradouro"
        onChange={formik.handleChange}
        value={dataCep.logradouro}
      />
      <br />
      <label htmlFor="numero">Número</label>
      <input
        id="numero"
        name="numero"
        type="text"
        placeholder="Número"
        onChange={formik.handleChange}
        value={formik.values.numero}
      />
      <br />
      <label htmlFor="complemento">Complemento</label>
      <input
        id="complemento"
        name="complemento"
        type="text"
        placeholder="Complemento"
        onChange={formik.handleChange}
        value={formik.values.complemento}
      />
      <br />
      <label htmlFor="cep">CEP</label>
      <IMaskInput
        mask="00.000-000"
        id="cep"
        name="cep"
        type="text"
        placeholder="CEP"
        onChange={formik.handleChange}
        value={formik.values.cep}
      />
      <br />
      <label htmlFor="cidade">Cidade</label>
      <input
        id="cidade"
        name="cidade"
        type="text"
        placeholder="Cidade"
        onChange={formik.handleChange}
        value={dataCep.localidade}
      />
      <br />
      <label htmlFor="estado">Estado</label>
      <input
        id="estado"
        name="estado"
        type="text"
        placeholder="Estado"
        onChange={formik.handleChange}
        value={dataCep.uf}
      />
      <br />
      <label htmlFor="pais">Pais</label>
      <input
        id="pais"
        name="pais"
        type="text"
        placeholder="Pais"
        onChange={formik.handleChange}
        value={formik.values.pais}
      />

      <button type="submit">Procurar pelo CEP</button>
    </form>
  )
};

export default Address