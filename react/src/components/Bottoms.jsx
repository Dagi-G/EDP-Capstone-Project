import { useState, useEffect } from 'react';
import bottoms from '../assets/promo.json';
import Product from './Product';

const Bottoms = () => {
    const [bottoms, setBottoms] = useState([])
    useEffect(() => {
        const fetchBottoms = async () => {
            try {

                const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/products/bottoms`)
                if (!response.ok) {
                    throw new Error('Bottoms data coundent match')
                }
                const json_response = await response.json()
                setBottoms(json_response)
            } catch (error) {

                console.error('error fetching bottoms', error)
            }
        }
        fetchBottoms()
    }, [])
    return (

        <div>
            <h5>All bottoms for sale </h5>
            <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px'}}>

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