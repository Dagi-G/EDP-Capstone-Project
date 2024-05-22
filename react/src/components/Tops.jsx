import { useState, useEffect } from 'react';
import tops from '../assets/promo.json';
import Product from './Product';

const Tops=()=> {
    const control = 1
    const [tops,setTops] = useState([])
    useEffect( () => {
        const fetchTops= async ()=> {
            try {

            const response=await fetch(`${import.meta.env.VITE_SERVER_URL}/tops`)
          if (!response.ok){
            throw new Error('Tops data coundent match')
          }
          const json_response=await response.json()
          setTops(json_response)
            } catch(error){

                console.error('error fatching Tops',error)
            }
        }
         fetchTops()
    } , [control])
    return (
      
       <div>
        <h1>All tops for sale </h1>
<div className="card-container d-flex flex-row justify-content-start" style={{ gap: "20px", padding: "20px" }}>

{
    tops.map((promo) => (
    <Product key={promo.id} data={promo} />
    ))
}
</div>
         </div>
       
    )
}
export default Tops