import React, { useState, useEffect } from 'react';
import BasicExample from './Navbar';
import { Link } from 'react-router-dom';



export default function Webshop(){
    

    return(
        <div>
        <div><BasicExample/></div>               
        <h1>BikeService Webshop</h1>
        <p>Select product type</p>
        <Link to={"/webshop/bikes"}><button>Bikes</button></Link>
        <Link to={"/webshop/parts"}><button>Parts</button></Link>
        <Link to={"/webshop/tools"}><button>Tools</button></Link>
        <Link to={"/webshop/accessories"}><button>Accessories</button></Link>
        </div>
    );

}
