import React from 'react';

const Footer = () => {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <p className="navbar-brand h1"> Diego Fedre - &copy; {new Date().getFullYear()} </p>
            </div>
        </nav>
    )
}

export default Footer;
