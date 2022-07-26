import { useContext } from 'react';
import { CountContext } from '../context/CountContext'

function Counter() {

    const {count, setCount} = useContext(CountContext);
    
  return (
    <div>
        <p>Count: {count}</p>
        <br/>
        <button onClick={() => setCount(count + 1)} >Incrementar</button>
        <button onClick={() => setCount(count - 1)} >Decrementa</button>
    </div>
  )
}
export default Counter;