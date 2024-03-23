 
export const actionType=
{
   VIEW_METEO:"VIEW_METEO",
   VIEW_NEWS:"VIEW_NEWS"
}
export const setmeteodata=(data)=>({
  type:actionType.VIEW_METEO,
 payload:data
})
export const setnews=(data)=>({
  type:actionType.VIEW_NEWS,
  payload:data
})
const newsAPI=process.env.REACT_APP_NEWS;
const meteoAPI=process.env.REACT_APP_METEO;

 export const obtainmeteo=(cityName)=>
 {
     return async(dispatch)=>
     {
         fetch(
             'https://api.openweathermap.org/data/2.5/forecast?q='+cityName+'&units=metric&appid=c8c98b5ab556be664cdfdbe9eba56b1b'
           )
             .then((res) => {
               if (res.ok) {
                 return res.json();
               } 
               else 
               {
                 throw new Error("errore");
               }
             })
             .then((data) => 
             {
                dispatch(
                setmeteodata(data),
                
               )
               
             })
             .catch((err) => 
             {
               console.log(err);
             });
         };
     }
     export const obtainews=()=>async(dispatch)=>
    {
      const url = 'https://news-api14.p.rapidapi.com/top-headlines?country=it&language=en&pageSize=12';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '3aa4910d56msh9dd269d35cce39cp12f60bjsn43ac8bc4dd47',
          'X-RapidAPI-Host': 'news-api14.p.rapidapi.com'
        }
      };

try {
	const response = await fetch(url, options);
	const result = await response.json();
	dispatch(setnews(result))
} catch (error) {
	console.error(error);
}
  }