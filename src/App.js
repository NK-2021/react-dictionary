import { useEffect,useState } from 'react';
import './App.css';
import axios from 'axios';
import {Container} from '@material-ui/core';
import Header from './components/Header/Header';
import Definitions from './components/Definitions/Definitions';

const App = () => {
  const[word, setWord] = useState('');
  const[meanings, setMeanings] = useState([]);
  const[category, setCategory] = useState('en');

  const dictionaryApi = async () =>{
    try{
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
      const {data}= response;
      setMeanings(data);
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    dictionaryApi();
  },[category, word]);

  return (
    <div className="App" style={{height: '100vh', backgroundColor:'lightblue'}}>
      <Container maxWidth="md" style={{display:"flex", flexDirection: "column", height: "100vh"}}>
        <Header category={category} setCategory={setCategory} word={word} setWord={setWord}/>
        <Definitions word={word} meanings={meanings} category={category}/>
      </Container>
    </div>
  );
}

export default App;
