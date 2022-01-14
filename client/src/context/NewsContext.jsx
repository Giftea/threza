import React, { useEffect, useState } from "react";

export const NewsContext = React.createContext();


export const NewsProvider =  ({children}) => {
    const [news, setNews] = useState([]);
    const [data,setData] =useState('');

   const fetchNews = async () => {
        fetch("https://bing-news-search1.p.rapidapi.com/news/search?q=ethereum&safeSearch=Off&textFormat=Raw&freshness=Day&count=12", {
            "method": "GET",
            "headers": {
                "x-bingapis-sdk": "true",
                "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
                "x-rapidapi-key": "444067878cmsh7add153d1e8a536p111d9cjsne75a535f6346"
            }
        })
        .then(response => {
            return response.json();
        })
        .then( data => {
            return setNews(data.value)
        })
        .catch(err => {
            console.error(err);
        });
   }

   useEffect(() => {
       fetchNews();
   }, [])

   return (
       <NewsContext.Provider value={{news,data}}>
           {children}
       </NewsContext.Provider>
   )
    
}
