import React from 'react';
import notfound from '../../image/404.jpg';

const Notfound = () => {
    return (
        <div>
            <img src={notfound} className="img-fluid" alt="" />
        </div>
    );
};

export default Notfound;