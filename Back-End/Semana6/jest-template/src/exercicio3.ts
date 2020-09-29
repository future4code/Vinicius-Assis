import { userInfo } from "os"

export enum LOCATION {
  EUA = "EUA",
  BRAZIL = "BRAZIL",
}

export enum NACIONALITY {
  BRAZILIAN = "BRAZILIAN",
  AMERICAN = "AMERICAN",
}

export interface User {
  name: string;
  age: number;
  nacionality: NACIONALITY;
}

export interface Casino {
  name: string;
  location: LOCATION;
}

export interface Result {
  brazilians: ResultItem;
  americans: ResultItem;
}

export interface ResultItem {
  allowed: string[];
  unallowed: string[];
}

export const verifyAge = (casino: Casino, users: User[]): Result =>{
    const allowed: User[] = []
    const unallowed: User[] = []

    for(const user of users){
        if(casino.location === LOCATION.BRAZIL && user.age >= 18 || casino.location === LOCATION.EUA && user.age >= 21 ){
            allowed.push(user)
        }else{
            unallowed.push(user)
        }
    }

   return {
       brazilians: {
        allowed: allowed.filter((person)=>{
            return person.nacionality === NACIONALITY.BRAZILIAN
        }).map((people)=>{
            return people.name
        }),
        unallowed: unallowed.filter((person)=>{
            return person.nacionality === NACIONALITY.BRAZILIAN
        }).map((people)=>{
            return people.name
        }),
       },
       americans: {
        allowed: allowed.filter((person)=>{
            return person.nacionality === NACIONALITY.AMERICAN
        }).map((people)=>{
            return people.name
        }),
        unallowed: unallowed.filter((person)=>{
            return person.nacionality === NACIONALITY.AMERICAN
        }).map((people)=>{
            return people.name
        }),
       }
       

   }

}