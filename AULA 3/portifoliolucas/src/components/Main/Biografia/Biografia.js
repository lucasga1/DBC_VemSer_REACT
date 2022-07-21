import axios from 'axios';
import { useEffect, useState } from 'react';
import css from './Biografia.module.css'

const Biografia = () => {

  const [bio, setBio] = useState([]);
   
    async function setup() {
        try {
            const { data } = await axios.get('https://api.github.com/users/lucasga1');
            setBio(data.bio)                      
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setup()
    }, []);

  return (
    <div className={css.bio}>
      <h1>Biografia</h1>
        <p>{bio}</p>
    </div>
  )
}
export default Biografia;