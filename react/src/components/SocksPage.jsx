import Sock from './Sock'
import { useState, useEffect } from 'react';

const SocksPage=()=> {
    const [socks,setSocks] = useState([])
    useEffect( () => {
        const fetchSocks= async ()=> {
            try {

            const response=await fetch(`${import.meta.env.SERVER_URL}/socks`)
          if (!response.ok){
            throw new Error('Socks data coundent match')
          }
          const json_response=await response.json()
          setSocks(json_response)
            } catch(error){

                console.error('error fatching Socks',error)
            }
        }
        fetchSocks()
    })
    return (
      
       <div>
        <h1>All socks for sale </h1>
        <div>
        {
            socks.map((sock)=>(
            <Sock key = {sock.id}    data = {sock}/>
            ))
        }
        </div>
         </div>
       
    )
}
export default SocksPage