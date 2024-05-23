import { useState, useEffect } from 'react';
import bottoms from '../assets/promo.json';
import Product from './Product';

const Bottoms=()=> {
    // const [bottoms,setBottoms] = useState([])
    // useEffect( () => {
    //     const fetchBottoms= async ()=> {
    //         try {

    //         const response=await fetch(`${import.meta.env.SERVER_URL}/bottoms`)
    //       if (!response.ok){
    //         throw new Error('Bottoms data coundent match')
    //       }
    //       const json_response=await response.json()
    //       setBottoms(json_response)
    //         } catch(error){

    //             console.error('error fatching bottoms',error)
    //         }
    //     }
    //     fetchBottoms()
    // }, [])
    return (
      
       <div>
        <h5>All bottoms for sale </h5>
<div className="card-container d-flex flex-row justify-content-start" style={{ gap: "20px", padding: "20px" }}>

{
    bottoms.map((promo) => (
    <Product key={promo.id} data={promo} />
    ))
}
</div>
         </div>
       
    )
}
export default Bottoms