 export const VIEW_METEO="VIEW_METEO"
export const SET_CITY="SET_CITY"

 export const obtainmeteo=(cityName)=>
 {
     return async(dispatch)=>
     {
         fetch(
             'https:api.openweathermap.org/data/2.5/forecast?q='+cityName+'&units=metric&appid=c8c98b5ab556be664cdfdbe9eba56b1b'
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
                console.log(data.list)
                dispatch({
                type:VIEW_METEO,
                payload:data.list
               })
               dispatch({
                type:SET_CITY,
                payload:cityName
               })
             })
             .catch((err) => 
             {
               console.log(err);
             });
         };
     }
    