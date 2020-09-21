import axios from "axios"

const baseUrl: string = "https://us-central1-labenu-apis.cloudfunctions.net/labenews/"

type Subscriber = {
   id: string,
   name: string,
   email: string
}

const pegaAssinantes = async():  Promise<Subscriber[]> =>{
    const subscribers = await axios.get(`${baseUrl}/subscribers/all`);
    return subscribers.data.map((subscriber: Subscriber)=>{
        return{
            id: subscriber.id,
            name: subscriber.name,
            email: subscriber.email
        }
    })
};
console.log(pegaAssinantes())
const main = async () => {
    try {
      const subscribers = await pegaAssinantes();
      console.log(subscribers)
    } catch (e) {
      console.log(e.response.data)
      }
    };
    
    main();