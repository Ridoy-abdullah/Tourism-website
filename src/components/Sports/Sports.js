import React, { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import './Sport.css';

const Sports = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div>
                <h4 className="text-info">Try Now</h4>
                
            </div>
            <div className="sport-video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/_yOIQCFxPOI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div className="py-3">
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                    ReadMore
                </Button>
              
            </div>
        </div>
    );
};

export default Sports;
