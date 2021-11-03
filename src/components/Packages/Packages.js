import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Package from '../Package/Package';
import './Packages.css';

const Packages = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://sheltered-dawn-30026.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className="mt-5">
            <h2 className="text-dark ">Tour Package</h2>
            <div className="packages-container">
            
            {
                items.map(item => <Package
                    key={item._id}
                    item={item}
                ></Package>)
            }
        </div>
        </div>
    );
};

export default Packages;