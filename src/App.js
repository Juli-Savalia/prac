import './App.css';
import {todo,brands,card} from "./Record"
import Filter from './Filter'
import { useState } from 'react';

function App() {
  const [record,setRecord] = useState(card)
  
  const FilterTodo = (to) => {
    if(to === "All"){
      setRecord(card);
    }
    else
    {
      let items = card.filter((val) => val.category === to);
      setRecord(items);
    }
  };

  return(
    <>
      <Filter todo = {todo} brands = {brands} card = {card} />
    </>
  )
}

export default App;
