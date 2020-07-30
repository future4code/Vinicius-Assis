import React from "react";
import axios from "axios";
import {render} from "react-testing-library";
import Index from "./Index"

test("Testando buscar tarefas", ()=>{
    axios.get = jest.fn().mockResolvedValue([
        {
            "text": "Lavar a louça",
            "day": "Segunda",
            "id": "yGuE11cmKquF1nahEzsr"
        }
    ])
    const {getByText} = render(<Index/>)
    expect(axios.get).toHaveBeenCalled()
})








