import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (<Link to="/">
        <div style={
            {
                backgroundColor: 'cyan',
                color: 'white',
                padding: '10px',
                width: '100%'
            }
        }>
            Casa
        </div>
    </Link>)
}

export default Header;