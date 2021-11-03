import React from 'react';
import { Button } from 'react-bootstrap';
import './Resort.css';
const Resort = () => {
    return (
        <>

            <div className="my-5 py-5 pt-5 mb-5">
                <h5 className="text-center text-info ">Choose Your</h5>
                <h1>Resorts</h1>
                {/* <p>A hotel is frequently a central feature of a resort, such as the Grand Hotel at Mackinac Island, Michigan. Some resorts are also condominium complexes that are timeshares or owned fractionally or wholly owned condominium. A resort is not always a commercial establishment operated by a single company, but in the late 20th century, that sort of facility became more common.</p> */}
            </div>

            <div className="row resort py-5">
                <div className="col-lg-4 col-sm-12">
                    <img className="resort-image" src="https://image.freepik.com/free-photo/woman-hiking-snowy-mountain_53876-105337.jpg" alt="" />
                    <h4 className="text-center text-info m-3">Winter</h4>
                    <Button className="mb-4" variant="dark">View details</Button>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <img className="resort-image" src="https://image.freepik.com/free-photo/two-happy-friends-out-shopping-session-with-shopping-bags_23-2148673234.jpg" alt="" />
                    <h4 className="text-center text-info m-3">Summer</h4>
                    <Button className="mb-4" variant="dark">View details</Button>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <img className="resort-image" src="https://image.freepik.com/free-photo/closeup-shot-wet-glass-reflecting-rainy-forest-scenery_181624-23365.jpg" alt="" />
                    <h4 className="text-center text-info m-3">Rainy</h4>
                    <Button className="mb-4" variant="dark">View details</Button>
                </div>
            </div>
        </>

    );
};

export default Resort;