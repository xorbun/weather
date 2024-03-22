 
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
    export const obtainews=()=>
    {
      return async(dispatch)=>{
        fetch(
          'https://newsapi.org/v2/everything?q=weather&apiKey=ada075e87eda4647b0e5729d60880d90'
        )
        .then((res)=>{
          if(res.ok)
          {
            return res.json();
          }
          else
          {
            throw new Error("errore");
          }
        })
        .then((data)=>
        {
          dispatch(
            setnews(data)
          )
        })
        .catch((err)=>
        {
          console.log(err);
        })
      }
    }