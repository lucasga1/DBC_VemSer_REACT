import { useFormik } from "formik"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"


function Login() {
    const { login } = useContext(AuthContext);
    
    const formik = useFormik({
        initialValues: {
            login: '',
            senha: ''
        },
        
        onSubmit: values => {            
            login(values);
        }
    });
    
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="login">Usuário:</label>
            <input
                id="login"
                name="login"
                type='text'
                onChange={formik.handleChange}
                value={formik.values.login}
            />
            <br />
            <label htmlFor="senha">Senha:</label>
            <input
                id="senha"
                name="senha"
                type='password'
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            <br />
            <button type="submit">Entrar</button>
        </form>
    )
}

export default Login