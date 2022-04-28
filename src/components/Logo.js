import React from 'react';

const Logo = () => {
    return (
        <div className="logo">
            {/* les images importée dans une balise img sont accessible dans public */}
            <img src="./logo192.png" alt="Logo React" />
            <h3>Bienvenue </h3>
        </div> 
    );
};

export default Logo;