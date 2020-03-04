import React from 'react';
import { Link } from 'react-router-dom';

const Beer = ({id, image, name, tagline, contributedBy}) => {
    return (
        <Link to={"/beers/" + id}>
        <div>
            <img src={image} />
            <h3>{name}</h3>
            <p>{tagline}</p>
            <p>{contributedBy}</p>
        </div>
        </Link>
    )
}

export default Beer;