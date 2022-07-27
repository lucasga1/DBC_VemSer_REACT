import { useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';



function People() {
    const { verificaToken } = useContext(AuthContext);
  
    useEffect(() => {
      verificaToken();
    })

  return (
    <div>People</div>
  )
  
}
export default People