import React from 'react';
import { Button } from 'react-bootstrap';
import logo from '../../image/react-logo-svgrepo-com.svg';
import payment from '..//..//image/payment.png'
import './Footer.css';

const Footer = () => {
    return (
        <div className="container-fluid bg-dark text-white footer-section py-5">
            {/* © 2021 All Rights Reserverd.
            <div>
                <small className="text-center">Powered by @ Ridoy Abdullah 2021</small>
            </div> */}
            <div class="container px-4">
                <div class="row gx-5 pb-4">
                    <div class="col">
                        <div class="p-3 ">
                        <h5>Recent Post</h5>
                        <p className="fs-6"><small className="fs-6">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</small></p>
                        </div>
                    </div>
                    <div class="col">
                        <img src={payment} alt="" />
                    </div>
                </div>
                <p>© 2021 All Rights Reserverd.</p>
                <p>Powered by @ Ridoy Abdullah 2021</p>
            </div>
        </div>
    );
};

export default Footer;