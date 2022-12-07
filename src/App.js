import Header from './components/Header'
import Body from './components/Body'
import Form from './components/Form'
import './App.css';
import {useState} from 'react'
import { useSelector } from 'react-redux'


function App() {
  const displayForm = useSelector((state) => state.displayForm.value)
  return (
    <div className="App">
      { displayForm && <Form /> }
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
