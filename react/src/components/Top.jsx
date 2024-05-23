import React from 'react';
const Top = (props) =>{
    return(
        <>
            <div className="card" style={{ flex: '1', minWidth: '300px', maxWidth: '45%' }}>
                <img src="..." class="card-img-top" alt="..."/>
                <h5 class="card-title">{props.data.topDetails.Size}</h5>
                 <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            
        </>
    )
}
export default Top