import axios from 'axios';
import { useEffect, useState } from 'react';
import List from './components/List';
import './App.css';

function App() {

  const [perfil, setPerfil] = useState({});
  const [company, setCompany] = useState({});

  async function setup() {
    try {
      const { data } = await axios.get('https://api.github.com/users/lucasga1');
      setPerfil(data);
      setCompany(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setup()
  }, [])

  return (
    <div className="App">
      <List user={perfil} empresa={company}/>
    </div>
  );
}

export default App;
