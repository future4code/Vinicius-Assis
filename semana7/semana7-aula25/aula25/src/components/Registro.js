import React from 'react';
import style from "styled-components";


class Registro extends React.Component{
    state={
        Registro:[]
    }
    render(){

        return(
            <div>
                <div>
                    <button>Ir para página de Lista</button>
                </div>
                <div>
                    <div>
                        <label>Nome:</label>
                        <input/>
                    </div>
                    <div>
                        <label>Email:</label>
                        <input/>
                    </div>
                    <button>Salvar</button>
                </div>
            </div>
        )
    }

}

export default Registro