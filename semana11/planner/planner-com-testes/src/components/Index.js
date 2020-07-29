import React, {useState, useEffect} from "react";

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
    return (
      <div>
        <input value={inputCriaTarefa} onChange={onChangeCriaTarefa}/>
        <button onClick={onClick}>Aaaa</button>
      </div>
    );
  }
  
  export default Index;