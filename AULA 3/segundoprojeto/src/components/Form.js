function Form({ name, setName }) {
    function cadastrarUsuario(e) {
        e.preventDefault();
        console.log('usuario cadastrado')
    }
    return (
        <div>
            <h1>Meu cadastro {name}</h1>
            <form onSubmit={cadastrarUsuario}>
            <div>
                <input 
                type="text" 
                placeholder="Digite seu nome"
                onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <input type="submit" value="Cadastrar" />
            </div>
            </form>
        </div>
    )    
}
export default Form;