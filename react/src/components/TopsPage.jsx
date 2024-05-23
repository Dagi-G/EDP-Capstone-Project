import Top from './Top'
import { useState, useEffect } from 'react';

const TopsPage=()=> {
    const effectControl = 1;
    const [tops,setTops] = useState([])
    useEffect( () => {
        const fetchTops = async () => {
            try {
                //console.log(import.meta.env.VITE_SERVER_URL)
                const response=await fetch(`${import.meta.env.VITE_SERVER_URL}/tops`)
                if (!response.ok){
                    throw new Error('Socks data coundent match')
                }
                const json_response = await response.json()
                console.log(json_response)
                setTops(json_response)
            } catch(error){
                console.error('error fetching tops',error)
            }
        }
        fetchTops()
    }, [effectControl])

    return (
        <div>
            <h1>All Tops for sale </h1>
            <div>
            {
                tops.map((top)=>(
                <Top key = {top.id}    data = {top}/>
                ))
            }
            </div>
        </div>  
    )
}
export default TopsPage