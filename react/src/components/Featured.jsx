import React from 'react';
import Promo_data from '../assets/promo.json';
import Promotion from './Promotion';

const Featured = () => {
    return (
      <>
<h5>Featured</h5>
<div className="card-container d-flex flex-row justify-content-start" style={{ gap: "20px", padding: "20px" }}>

{
    Promo_data.map((promo) => (
    <Promotion key={promo.id} data={promo} />
    ))
}
</div>
</>

    );
};

export default Featured;