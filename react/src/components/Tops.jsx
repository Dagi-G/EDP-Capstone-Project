import { useState, useEffect } from 'react';
import Product from './Product';

const Tops = () => {
    const [tops, setTops] = useState([])
    useEffect(() => {
        const fetchTops = async () => {
            try {

                const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/products/tops`)
                if (!response.ok) {
                    throw new Error('Tops data coundent match')
                }
                const json_response = await response.json()
                setTops(json_response)
            } catch (error) {

                console.error('error fatching Tops', error)
            }
        }
        fetchTops()
    }, [])
    return (

        <div>
            <h5>All tops for sale </h5>
            <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px'}}>

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