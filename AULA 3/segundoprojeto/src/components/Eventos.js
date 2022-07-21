
function Eventos({numero}) { //Componente... criar tudo aqui dentro.
    function meuEvento(num){
        console.log(`Opa, foi clicado. Seu número é: ${numero} e ${num}`)
    }
    return(
        <div>
            <p>Click para disparar um evento</p>
            <button onClick={() => meuEvento(20)}>Ativar!</button>
        </div>
    )
}
export default Eventos;