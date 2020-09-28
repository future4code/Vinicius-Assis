import {User} from "../src/exercicio1"
import {performPurchase} from "../src/exercicio1"

describe("Teste exercicio 1", ()=>{
    test("Testando usuário com o saldo maior do que o valor de compra", ()=>{
        const user: User ={
            name: "Viny",
            balance: 100
        }

        const result = performPurchase(user, 80)

        expect(result).toEqual({
            ...user,
            balance: 20
        })
    })

    test("Testando usuário com o saldo igual ao valor de compra", () => {
        const user: User = {
            name: "Viny",
            balance: 100
        }
    
        const result = performPurchase(user, 100)
        
        expect(result).toEqual({
            ...user,
            balance: 0
        })
    })

    test("Testando usuário com o saldo menor do que o valor de compra", () => {
        const user: User = {
            name: "Viny",
            balance: 100
        }
    
        const result = performPurchase(user, 120)
        
        expect(result).toEqual(undefined)
    })
})