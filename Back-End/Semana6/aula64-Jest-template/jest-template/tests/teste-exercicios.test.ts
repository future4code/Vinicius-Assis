import { Character, performAttack, validateCharacter } from "../src/exercicios"


describe("Testes exercicio 2", ()=>{

    test("Teste que verifica o comportamento da função com o nome vazio. ('') ", ()=>{
        const result = validateCharacter({
            name: "",
            life: 1500,
            strength: 300,
            defense: 500
        })

        expect(result).toBe(false)
    });

    test("Teste que verifica o comportamento da função com a vida vazia. (undefined)", ()=>{
        const result = validateCharacter({
            name: "Viny",
            life: undefined, 
            strength: 300,
            defense: 500
        })

        expect(result).toBe(false)
    })

    test("Teste que verifica o comportamento da função com a força vazia. (undefined)", ()=>{
        const result = validateCharacter({
            name: "Viny",
            life: 1500, 
            strength: undefined,
            defense: 500
        })

        expect(result).toBe(false)
    })

    test("Teste que verifica o comportamento da função com a defesa vazia. (undefined)", ()=>{
        const result = validateCharacter({
            name: "Viny",
            life: 1500, 
            strength: 300,
            defense: undefined
        })

        expect(result).toBe(false)
    })

    test("Teste que verifica comportamento da função com tipo number com valor negativo. (undefined)", ()=>{
        const result = validateCharacter({
            name: "Viny",
            life: -100, 
            strength: 300,
            defense: 500
        })

        expect(result).toBe(false)
    })

    test("Teste que verifica comportamento da função com algum item com tipo number com valor 0.", ()=>{
        const result = validateCharacter({
            name: "Viny",
            life: 0, 
            strength: 300,
            defense: 500
        })

        expect(result).toBe(false)
    })

    test("Teste que verifica comportamento da função com informações válidas", ()=>{
        const result = validateCharacter({
            name: "Viny",
            life: 1500, 
            strength: 300,
            defense: 500
        })

        expect(result).toBe(true)
    })

})

describe("Teste exercicio 5", ()=>{

    test("Teste em que o defensor perca 200 pontos de vida. Verificando o estado final das personagens. Verificando se a função mockada foi chamada, o número de vezes em que ela foi chamada, quantas vezes ela retornou.", () => {
        
        const validatorMock = jest.fn(() => {
          return true;
        });
    
        const attacker: Character = {
          name: "Leo",
          life: 1500,
          defense: 200,
          strength: 600,
        };
    
        const defender: Character = {
          name: "Viny",
          life: 1500,
          defense: 400,
          strength: 800,
        };
    
        performAttack(attacker, defender, validatorMock as any);
    
        expect(defender.life).toEqual(1300);
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(2);
        expect(validatorMock).toHaveReturnedTimes(2);
      });

      test("Teste com um dos personagens com alguma informação inválida.Verificando se a função mockada foi chamada, o número de vezes em que ela foi chamada, quantas vezes ela retornou.", () => {
        expect.assertions(4);
        const validatorMock = jest.fn(() => {
          return false;
        });
    
        const attacker: Character = {
          name: "Leo",
          life: 1500,
          defense: 200,
          strength: 600,
        };
    
        const defender: Character = {
          name: "Viny",
          life: 1500,
          defense: 400,
          strength: 800,
        };
    
        try {
          performAttack(attacker, defender, validatorMock as any);
        } catch (err) {
          expect(err.message).toBe("Invalid character");
          expect(validatorMock).toHaveBeenCalled();
          expect(validatorMock).toHaveBeenCalledTimes(1);
          expect(validatorMock).toHaveReturnedTimes(1);
        }
      });
})

describe("Testes exericio 6", ()=>{

    test("Verificando estado final da vida dos personagens após 4 ataques alternados", () => {
        const validatorMock = jest.fn(() => {
          return true;
        });
    
        const attacker: Character = {
          name: "Leo",
          life: 1500,
          defense: 200,
          strength: 800,
        };
    
        const defender: Character = {
          name: "Viny",
          life: 1500,
          defense: 400,
          strength: 800,
        };

        performAttack(attacker, defender, validatorMock as any);
        performAttack(defender, attacker, validatorMock as any);
        performAttack(defender, attacker, validatorMock as any);
        performAttack(attacker, defender, validatorMock as any);

        expect(defender.life).toEqual(700);
        expect(attacker.life).toEqual(300);
    })

    test("Verificação exata de vidas", () => {
        const validatorMock = jest.fn(() => {
          return true;
        });
    
        const attacker: Character = {
          name: "Leo",
          life: 1500,
          defense: 200,
          strength: 800,
        };
    
        const defender: Character = {
          name: "Viny",
          life: 1500,
          defense: 400,
          strength: 800,
        };

        performAttack(attacker, defender, validatorMock as any);
        performAttack(defender, attacker, validatorMock as any);
        performAttack(defender, attacker, validatorMock as any);
        performAttack(attacker, defender, validatorMock as any);

        expect(defender.life).toBeGreaterThan(699);
        expect(defender.life).toBeLessThan(701);
        expect(attacker.life).toBeGreaterThan(299);
        expect(attacker.life).toBeLessThan(301);
    })

    test("Verificação de vida após a morte do defender", () => {
        const validatorMock = jest.fn(() => {
          return true;
        });
    
        const attacker: Character = {
          name: "Leo",
          life: 1500,
          defense: 200,
          strength: 800,
        };
    
        const defender: Character = {
          name: "Viny",
          life: 1500,
          defense: 400,
          strength: 800,
        };

        performAttack(attacker, defender, validatorMock as any);
        performAttack(attacker, defender, validatorMock as any);
        performAttack(attacker, defender, validatorMock as any);
        performAttack(attacker, defender, validatorMock as any);

        expect(defender.life).toBeLessThan(0);
        expect(attacker.life).toEqual(1500);
    })

    test("Verificação de vida após a morte do attacker", () => {
        const validatorMock = jest.fn(() => {
          return true;
        });
    
        const attacker: Character = {
          name: "Leo",
          life: 1500,
          defense: 200,
          strength: 800,
        };
    
        const defender: Character = {
          name: "Viny",
          life: 1500,
          defense: 400,
          strength: 800,
        };

        performAttack(defender, attacker, validatorMock as any);
        performAttack(defender, attacker, validatorMock as any);
        performAttack(defender, attacker, validatorMock as any);

        expect(attacker.life).toBeLessThan(0);
        expect(defender.life).toEqual(1500);
    })
})