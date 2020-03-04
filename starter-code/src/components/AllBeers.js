import React, { useEffect, useState, Fragment } from 'react';
import Beer from './Beer';
import IronInput from './IronInput';

const AllBeers = () => {

    const [ beers, updateBeers ] = useState([]);

    useEffect(()=>{
        fetch('https://ih-beers-api2.herokuapp.com/beers')
        .then(res=>res.json())
        .then(json=>{
            console.log(json)
            updateBeers(json);
        })
    }, [])

    const handleChange = (e) => {
        let { value } = e.target;
        fetch(`https://ih-beers-api2.herokuapp.com/beers/search?q=${value}`)
        .then(res=>res.json())
        .then(json=>{
            console.log(json)
            updateBeers(json);
        })
    }

    return (
        <Fragment>
            <IronInput type="text" name="search" label="Buscar" handleChange={handleChange}/>
            {beers.map(beer=><Beer id={beer._id} image={beer.image_url} name={beer.name} tagline={beer.tagline} contributedBy={beer.contributed_by}/>)}
        </Fragment>
    )
}

export default AllBeers