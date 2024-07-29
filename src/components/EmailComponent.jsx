import React, { useState } from 'react';
import './styles.css'; // Import your CSS file

const EmailComponent = ({ title, description, trainingImg }) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpand = () => {
        setExpanded(true);
    };

    const handleCollapse = (e) => {
        e.stopPropagation();
        setExpanded(false);
    };

    return (
        <div className="container">
            <div
                className={`email ${expanded ? 'expand' : ''}`}
                onClick={handleExpand}
            >
                {expanded ? (
                    <div className="bottom flex flex-col">
                        <h1 className='text-lg font-bold'>
                            {title}
                        </h1>
                        <p className="description">
                            {description}
                        </p>
                        <div className="x-touch" onClick={handleCollapse}>
                            <div className="x">
                                <div className="line1"></div>
                                <div className="line2"></div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="avatar-wrapper">
                        <img src={trainingImg} alt="training" className="avatar-img border-2 border-white" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default EmailComponent;
