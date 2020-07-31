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
     setTarefas(response.data)
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
        <input placeholder={"Criar Tarefa"} value={inputCriaTarefa} onChange={onChangeCriaTarefa}/>
        <select>
          <option value={"Segunda-Feira"}>Segunda-Feira</option>
          <option value={"Terça-Feira"}>Terça-Feira</option>
          <option value={"Quarta-Feira"}>Quarta-Feira</option>
          <option value={"Quinta-Feira"}>Quinta-Feira</option>
          <option value={"Sexta-Feira"}>Sexta-Feira</option>
          <option value={"Sábado"}>Sábado</option>
          <option value={"Domingo"}>Domingo</option>
        </select>
        <button onClick={onClick}>Adicionar</button>
        <ul>
          {pegaTarefas}
        </ul>
      </div>
    );
  }
  
  export default Index;