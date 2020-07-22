import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const useUrl = a =>{
   const history = useHistory();
   const casa = ()=>{
      history.push(a)
   }
   return [casa]
}
export default useUrl

// export const goToHome = ()=>{
//    history.push("/")
// }
// export const goToHomeLogin = ()=>{
//    history.push("/home/login")
// }