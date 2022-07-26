import { useContext } from 'react';
import {CountContext} from '../context/CountContext'
 

function Mirror() {
    const {count} = useContext(CountContext);
  return (
    <div>Mirror: {count}</div>
  )
}
export default Mirror