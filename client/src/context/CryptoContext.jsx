import React, { useEffect, useState } from "react";

export const CryptoContext = React.createContext();


export const CryptoProvider =  ({children}) => {
    const [crypto, setCrypto] = useState([]);
    const [data,setData] =useState('');

const baseUrl = "https://coinranking1.p.rapidapi.com";


   const fetchCrypto = async () => {
        fetch(`${baseUrl}/coins?limit=12`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "coinranking1.p.rapidapi.com",
                "x-rapidapi-key": "867dc878f4msh6ddd1a8b5cf5a7bp1939c8jsnc754e2521791",
            }
        })
        .then(response => {
            return response.json();
        })
        .then( data => {
            console.log(data)
            return setCrypto(data.data.coins)
        })
        .catch(err => {
            console.error(err);
        });
   }

   useEffect(() => {
       fetchCrypto();
   }, [])

   return (
       <CryptoContext.Provider value={{crypto,data}}>
           {children}
       </CryptoContext.Provider>
   )
    
}
