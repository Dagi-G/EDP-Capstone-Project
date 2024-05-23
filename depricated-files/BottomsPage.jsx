import Bottom from './Bottom'
import { useState, useEffect } from 'react';

const BottomsPage = () => {
    const effectControl = 1;
    const [bottoms,setBottoms] = useState([])
    useEffect( () => {
        const fetchBottoms = async () => {
            try {
                //console.log(import.meta.env.VITE_SERVER_URL)
                const response=await fetch(`${import.meta.env.VITE_SERVER_URL}/bottoms`)
                if (!response.ok){
                    throw new Error('Socks data could not be fetched!')
                }
                const json_response = await response.json()
                console.log(json_response)
                setBottoms(json_response)
            } catch(error){
                console.error('Error fetching bottoms data: ', error)
            }
        }
        fetchBottoms()
    }, [effectControl])
    return (
        <div>
            <h1>All Bottoms For Sale!</h1>
            <div>
            {
                bottoms.map((bottom)=>(
                <Bottom key = {bottom.id}    data = {bottom}/>
                ))
            }
            </div>
        </div>  
    )
}
export default BottomsPage