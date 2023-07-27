/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Product = ({product}) => {
    const {id, name, email, phone} = product;
      
    return (
    
        <div className="col">
           <div className="card">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-DYkitNzOfeNt_kOssNio0g_IIugsqiX4tw&usqp=CAU" className="card-img-top" alt="..."/>
             <div className="card-body">
               <h5 className="card-title">{name}</h5>
               <p>Id: {id} Phone: {phone}</p>
               <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
             </div>
            </div>
        </div>
        

    
    );
};

export default Product;