import React, {useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {Main} from "./Styled/styles"
import useUrl from "./Funcoes"

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
      nacionalidade: ""
    });

    const history = useHistory();
    const [goToHome] = useUrl("/")

    const handleInputChange = event => {
      const { name, value } = event.target;
  
      onChange(name, value);
    };
  
    const handleSave = event => {
      event.preventDefault();
      console.log("oi");
      console.log(`${form.primeiroNome}, ${form.idade}, ${form.motivo}, ${form.profissao}, ${form.nacionalidade}`)
    };

  return (
    <Main>
      <button onClick={goToHome}>Home</button>
      <form onSubmit={handleSave}>
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
        <div>
          <select
            name="nacionalidade"
            placeholder="Nacionalidade"
            onChange={handleInputChange}
            value={form.nacionalidade}
            required
          >
            <option></option>
            <option>África do Sul</option>
            <option>Albânia</option>
            <option>Alemanha</option>
            <option>Andorra</option>
            <option>Angola</option>
            <option>Anguilla</option>
            <option>Antigua</option>
            <option>Arábia Saudita</option>
            <option>Argentina</option>
            <option>Armênia</option>
            <option>Aruba</option>
            <option>Austrália</option>
            <option>Áustria</option>
            <option>Azerbaijão</option>
            <option>Bahamas</option>
            <option>Bahrein</option>
            <option>Bangladesh</option>
            <option>Barbados</option>
            <option>Bélgica</option>
            <option>Benin</option>
            <option>Bermudas</option>
            <option>Botsuana</option>
            <option>Brasil</option>
            <option>Brunei</option>
            <option>Bulgária</option>
            <option>Burkina Fasso</option>
            <option>botão</option>
            <option>Cabo Verde</option>
            <option>Camarões</option>
            <option>Camboja</option>
            <option>Canadá</option>
            <option>Cazaquistão</option>
            <option>Chade</option>
            <option>Chile</option>
            <option>China</option>
            <option>Cidade do Vaticano</option>
            <option>Colômbia</option>
            <option>Congo</option>
            <option>Coréia do Sul</option>
            <option>Costa do Marfim</option>
            <option>Costa Rica</option>
            <option>Croácia</option>
            <option>Dinamarca</option>
            <option>Djibuti</option>
            <option>Dominica</option>
            <option>EUA</option>
            <option>Egito</option>
            <option>El Salvador</option>
            <option>Emirados Árabes</option>
            <option>Equador</option>
            <option>Eritréia</option>
            <option>Escócia</option>
            <option>Eslováquia</option>
            <option>Eslovênia</option>
            <option>Espanha</option>
            <option>Estônia</option>
            <option>Etiópia</option>
            <option>Fiji</option>
            <option>Filipinas</option>
            <option>Finlândia</option>
            <option>França</option>
            <option>Gabão</option>
            <option>Gâmbia</option>
            <option>Gana</option>
            <option>Geórgia</option>
            <option>Gibraltar</option>
            <option>Granada</option>
            <option>Grécia</option>
            <option>Guadalupe</option>
            <option>Guam</option>
            <option>Guatemala</option>
            <option>Guiana</option>
            <option>Guiana Francesa</option>
            <option>Guiné-bissau</option>
            <option>Haiti</option>
            <option>Holanda</option>
            <option>Honduras</option>
            <option>Hong Kong</option>
            <option>Hungria</option>
            <option>Iêmen</option>
            <option>Ilhas Cayman</option>
            <option>Ilhas Cook</option>
            <option>Ilhas Curaçao</option>
            <option>Ilhas Marshall</option>
            <option>Ilhas Turks & Caicos</option>
            <option>Ilhas Virgens (brit.)</option>
            <option>Ilhas Virgens(amer.)</option>
            <option>Ilhas Wallis e Futuna</option>
            <option>Índia</option>
            <option>Indonésia</option>
            <option>Inglaterra</option>
            <option>Irlanda</option>
            <option>Islândia</option>
            <option>Israel</option>
            <option>Itália</option>
            <option>Jamaica</option>
            <option>Japão</option>
            <option>Jordânia</option>
            <option>Kuwait</option>
            <option>Latvia</option>
            <option>Líbano</option>
            <option>Liechtenstein</option>
            <option>Lituânia</option>
            <option>Luxemburgo</option>
            <option>Macau</option>
            <option>Macedônia</option>
            <option>Madagascar</option>
            <option>Malásia</option>
            <option>Malaui</option>
            <option>Mali</option>
            <option>Malta</option>
            <option>Marrocos</option>
            <option>Martinica</option>
            <option>Mauritânia</option>
            <option>Mauritius</option>
            <option>México</option>
            <option>Moldova</option>
            <option>Mônaco</option>
            <option>Montserrat</option>
            <option>Nepal</option>
            <option>Nicarágua</option>
            <option>Niger</option>
            <option>Nigéria</option>
            <option>Noruega</option>
            <option>Nova Caledônia</option>
            <option>Nova Zelândia</option>
            <option>Omã</option>
            <option>Palau</option>
            <option>Panamá</option>
            <option>Papua-nova Guiné</option>
            <option>Paquistão</option>
            <option>Peru</option>
            <option>Polinésia Francesa</option>
            <option>Polônia</option>
            <option>Porto Rico</option>
            <option>Portugal</option>
            <option>Qatar</option>
            <option>Quênia</option>
            <option>Rep. Dominicana</option>
            <option>Rep. Tcheca</option>
            <option>Reunion</option>
            <option>Romênia</option>
            <option>Ruanda</option>
            <option>Rússia</option>
            <option>Saipan</option>
            <option>Samoa Americana</option>
            <option>Senegal</option>
            <option>Serra Leone</option>
            <option>Seychelles</option>
            <option>Singapura</option>
            <option>Síria</option>
            <option>Sri Lanka</option>
            <option>St. Kitts & Nevis</option>
            <option>St. Lúcia</option>
            <option>St. Vincent</option>
            <option>Sudão</option>
            <option>Suécia</option>
            <option>Suiça</option>
            <option>Suriname</option>
            <option>Tailândia</option>
            <option>Taiwan</option>
            <option>Tanzânia</option>
            <option>Togo</option>
            <option>Trinidad & Tobago</option>
            <option>Tunísia</option>
            <option>Turquia</option>
            <option>Ucrânia</option>
            <option>Uganda</option>
            <option>Uruguai</option>
            <option>Venezuela</option>
            <option>Vietnã</option>
            <option>Zaire</option>
            <option>Zâmbia</option>
            <option>Zimbábue</option>
          </select>
        </div>
        <button>Inscrever-se</button>
      </form>
    </Main>
  );
}
export default RegistrationPage;