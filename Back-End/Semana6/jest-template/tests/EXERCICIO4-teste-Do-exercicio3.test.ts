import { Casino, LOCATION, NACIONALITY, User, verifyAge } from "../src/exercicio3";


describe("Teste do exercício 3", ()=>{

    test("Teste que recebe um usuário brasileiro que possa entrar em um estabelecimento no Brasil", ()=>{
        const brazilian: User = {
            name: "Viny",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN,
          };
      
          const casino: Casino = {
            name: "Vinyçópolis",
            location: LOCATION.BRAZIL,
          };
      
          const result = verifyAge(casino, [brazilian]);
          expect(result.brazilians.allowed).toEqual(["Viny"]);
    })

    test("Teste que recebe um usuário americando que possa entrar em um estabelecimento no Brasil", ()=>{
      const american: User = {
        name: "Leonard",
        age: 19,
        nacionality: NACIONALITY.AMERICAN,
      };
  
      const casino: Casino = {
        name: "Vinyçópolis",
        location: LOCATION.BRAZIL,
      };
  
      const result = verifyAge(casino, [american]);
      expect(result.americans.allowed).toEqual(["Leonard"]);
    })

    test("Teste que recebe dois usuários brasileiros e dois americanos. Todos com idade de 19 anos e quererem entrar em um cassino nos EUA", ()=>{
      
      const brazilian: User = {
        name: "Viny",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN,
      };

      const american: User = {
        name: "Leonard",
        age: 19,
        nacionality: NACIONALITY.AMERICAN,
      };
  
      const casino: Casino = {
        name: "LeonarWood",
        location: LOCATION.EUA,
      };
  
      const result = verifyAge(casino, [american, brazilian]);
      expect(result.americans.unallowed).toEqual(["Leonard"]);

      expect(result.brazilians.unallowed).toEqual(["Viny"]);
    })

    test("Teste que recebe dois usuários brasileiros e dois americanos. Os brasileiros devem ter 19 anos e os americanos 21 anos. Quererem entrar em um cassino nos EUA.", ()=>{
      const brazilianOne: User = {
        name: "Viny",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN,
      };

      const brazilianTwo: User = {
        name: "Leonardo",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN,
      };

      const americanOne: User = {
        name: "Leonard",
        age: 21,
        nacionality: NACIONALITY.AMERICAN,
      };

      const americanTwo: User = {
        name: "Vinicious",
        age: 21,
        nacionality: NACIONALITY.AMERICAN,
      };
  
      const casino: Casino = {
        name: "LeonarWood",
        location: LOCATION.EUA,
      };
  
      const result = verifyAge(casino, [americanOne, americanTwo, brazilianOne, brazilianTwo]);
      
      expect(result.americans.allowed).toEqual(["Leonard", "Vinicious"]);

      expect(result.brazilians.unallowed).toEqual(["Viny", "Leonardo"]);
    })
})