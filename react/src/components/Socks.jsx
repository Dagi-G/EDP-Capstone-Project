import { useState, useEffect } from 'react';
import socks from '../assets/promo.json';
import Product from './Product';

const Socks = (props) => {
    const [socks, setSocks] = useState([])
    useEffect(() => {
        const fetchSocks = async () => {
            try {

                const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/products/socks`)
                if (!response.ok) {
                    throw new Error('Socks data coundent match')
                }
                const json_response = await response.json()
                setSocks(json_response)
            } catch (error) {

                console.error('error fatching Socks', error)
            }
        }
        fetchSocks()
    }, [])
    return (

        <div>
            <h5>All socks for sale </h5>
            <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px'}}>

                {
                    socks.map((promo) => (
                        <Product key={promo.id} data={promo} addToCart = {props.addToCart}/>
                    ))
                }
            </div>
        </div>

    )
}
export default Socks