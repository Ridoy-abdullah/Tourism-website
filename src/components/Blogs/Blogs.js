import React from 'react';
import './Blogs.css';
import logo2 from  './/..//..//image/about me.jpg'
const Blogs = () => {
    return (
        
        <div className="d-flex justify-content-between p-5 pt-5 mt-5">
      <div className="pt-5">
        <img src={logo2} alt="" />
      </div>
      <div className="px-5 pt-5">
        <h2 className="fw-bold">About us</h2>
        <p>Our mission statement is a simple but challenging one: we want to educate the tour, activity, and travel sector, helping operators to better acquire customers and grow their businesses. We do not have clients or customers.we have partners — and we want to build long-lasting relationships, helping you through the many challenges of promoting a tourism business online. We believe in strong communication as the backbone of all our successful relationships.

          We want to see you stand on your own feet, relying less on online travel agents (OTAs) so that you pay less commission, creating more profit for your business. This is why we complement our services with a vast amount of free advice and guidance… and always will. If you have any questions,</p>
      </div>
    </div>
        
    );
};

export default Blogs;