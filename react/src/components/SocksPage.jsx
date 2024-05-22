import Sock from './Sock'
import { useState, useEffect } from 'react';

const SocksPage=()=> {
    const terminate = 1;
    const [socks,setSocks] = useState([])
    useEffect( () => {
        const fetchSocks= async ()=> {
            try {

            const response=await fetch(`http://localhost:3000/socks`)
          if (!response.ok){
            throw new Error('Socks data coundent match')
          }
          
          const json_response=await response.json()
          setSocks(json_response)
          console.log(json_response);
            } catch(error){

                console.error('error fatching Socks',error)
            }
        }
        fetchSocks()
    }, terminate)
    return (
      
       <div>
            <h1>All socks for sale </h1>
            <div>
                {
                    socks.map((sock)=>(
                    <Sock key = {sock.id} data = {sock}/>
                    ))
                }
            </div>
        </div>
       
    )
}
export default SocksPage