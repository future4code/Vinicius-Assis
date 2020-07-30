import React, {useState, useEffect} from "react";
import axios from "axios";

const url = "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-vinicius-fredeanelle";

function Index() {
  const [tarefas, setTarefas]= useState([]);
  const [inputCriaTarefa, setInputCriaTarefa]= useState("");

  const onChangeCriaTarefa = (event)=>{
    setInputCriaTarefa(event.target.value)
  }
  const onClick = ()=>{
    console.log(inputCriaTarefa)
  }

  useEffect(()=>{
    axios
    .get(url)
    .then(response=>{
     console.log(response.data)
     setTarefas(response.data)
     console.log(tarefas)
    })
    .catch(err=>{
      console.log(err.message)
    })
  }, [])

  const pegaTarefas = tarefas.map((a)=>{
    return <li>{a.text}</li>
    })
    return (
      <div>
        <input value={inputCriaTarefa} onChange={onChangeCriaTarefa}/>
        <button onClick={onClick}>Aaaa</button>
        <ul>
          {pegaTarefas}
        </ul>
      </div>
    );
  }
  
  export default Index;