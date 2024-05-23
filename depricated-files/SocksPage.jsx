import Sock from './Sock'
import { useState, useEffect } from 'react';

const SocksPage=()=> {
    const effectControl = 1;
    const [socks,setSocks] = useState([])
    useEffect( () => {
        const fetchSocks = async () => {
            try {
                //console.log(import.meta.env.VITE_SERVER_URL)
                const response=await fetch(`${import.meta.env.VITE_SERVER_URL}/socks`)
                if (!response.ok){
                    throw new Error('Socks data coundent match')
                }
                const json_response = await response.json()
                console.log(json_response)
                setSocks(json_response)
            } catch(error){
                console.error('error fatching Socks',error)
            }
        }
        fetchSocks()
    }, [effectControl])
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