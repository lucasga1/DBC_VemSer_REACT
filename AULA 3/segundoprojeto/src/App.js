import axios from 'axios';
import {useEffect, useState} from 'react'

import Form from './components/Form';

import './App.css';

function App() {
  const [name, setName] = useState();

  async function setup() {
    try {
      const {data} = await  axios.get('https://swapi.dev/api/');
      console.log(data)

    } catch (error) {
        console.log(error)
    }
  }

  useEffect( () => {
    setup()
  }, []);
  
  return (
    <div>
      <Form name={name} setName={setName}/>
    </div>
  );
}

export default App;
