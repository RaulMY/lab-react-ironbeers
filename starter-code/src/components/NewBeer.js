import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import IronInput from './IronInput'

const NewBeer = () => {

    const [formState, updateForm] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: ''
    });

    const handleChange = (e) => {
        let { name, value } = e.target;
        if (name == 'attenuation_level') {
            value = Number(value);
        }
        updateForm(Object.assign({}, formState, {[name]:value}))
    }

    let history = useHistory();

    const onSubmit = () => {
        fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
            method: 'POST',
            body: JSON.stringify(formState),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(json=>{
            history.push("/beers")
        })
    }

    return (
        <div>
            <IronInput label="Name" type="text" name="name" placeholder="ChidaChela" handleChange={handleChange}/>
            <IronInput label="Tagline" type="text" name="tagline" placeholder="ChidaChela" handleChange={handleChange}/>
            <IronInput label="Description" type="text" name="description" placeholder="Es una chela chida" handleChange={handleChange}/>
            <IronInput label="First Brewed" type="text" name="first_brewed" placeholder="Hace tiempo" handleChange={handleChange}/>
            <IronInput label="Brewers Tips" type="text" name="brewers_tips" placeholder="Mantenla helada" handleChange={handleChange}/>
            <IronInput label="Attenuation Level" type="number" name="attenuation_level" placeholder="0" handleChange={handleChange}/>
            <IronInput label="Contributed By" type="text" name="contributed_by" placeholder="Yo" handleChange={handleChange}/>
            <button onClick={onSubmit}>Add New</button>
        </div>    
    )
}

export default NewBeer