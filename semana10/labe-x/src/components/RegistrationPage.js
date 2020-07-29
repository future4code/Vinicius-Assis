import React, {useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {Main} from "./Styled/styles"
import useUrl, {link} from "./Funcoes"
import Select from "./Select"
import axios from "axios";

const useForm = initialValues => {
 
  const [form, setForm] = useState(initialValues);

  const onChange = (name, value) => {
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };

  return { form, onChange };
};

function RegistrationPage() {

    const { form, onChange } = useForm({
      primeiroNome: "",
      idade: "",
      motivo: "",
      profissao: "",
      nacionalidade: "",
      idViagens: ""
    });

    const [viagens, setViagens]= useState([])
    const history = useHistory();
    const [goToHome] = useUrl("/home")

    const handleInputChange = event => {
      const { name, value } = event.target;
  
      onChange(name, value);
    };
  
    const handleSave = event => {
      event.preventDefault();
      console.log("oi");
      console.log(`${form.primeiroNome}, ${form.idade}, ${form.motivo}, ${form.profissao}, ${form.nacionalidade}, ${form.idViagens}`)
    };

    const pegaViagem = ()=>{
      axios
      .get(`${link}/trips`)
      .then(response=>{
        setViagens(response.data.trips)
      })
      .catch(err =>{
        console.log(err.message)
        alert(`Houve um erro ${err.message}`)
      })
    }
    useEffect(()=>{
      pegaViagem()
    }, [])
    
     const candidatura = (event)=>{
       event.preventDefault()
       const body = {
          name: form.primeiroNome,
          age: form.idade,
          applicationText: form.motivo,
          profession: form.profissao,
          country: form.nacionalidade
       }
        axios
        .post(`${link}/trips/${form.idViagens}/apply`, body)
        .then(()=>{
          alert("Vc se candidatou com sucesso!")
        })
        .catch(err=>{
          alert(`Houve um erro ${err.message}`)
        })
     }

  return (
    <Main>
      <button onClick={goToHome}>Home</button>
      <form onSubmit={candidatura}>
        <div>
          <input
            name="primeiroNome"
            placeholder="Primeiro Nome"
            pattern={"[A-Za-z]{3,}"}
            title="O nome deve ter no mínimo 3 letras"
            value={form.primeiroNome}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <input
            name="idade"
            placeholder="Idade"
            type="number"
            min="18"
            value={form.idade}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <input
            name="motivo"
            placeholder="Motivo"
            value={form.motivo}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <input
            name="profissao"
            placeholder="Profissão"
            value={form.profissao}
            onChange={handleInputChange}
          />
        </div>
        <Select handleInputChange={handleInputChange} formNacionalidade={form.nacionalidade}/>
        <div>
          <select
            name="idViagens"
            onChange={handleInputChange}
            value={form.idViagens}
          >
            <option></option>
            {viagens.map((a)=>{
              return <option key={a.id} value={a.id}>{a.name}</option>
            })}
          </select>
        </div>
        <button>Inscrever-se</button>
      </form>
    </Main>
  );
}
export default RegistrationPage;