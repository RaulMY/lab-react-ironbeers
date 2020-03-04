import React from 'react';
import HomeLink from './HomeLink';
import { linkOptions } from '../utils';

const Home = props => {

    return (
        <div>
            {
                linkOptions.map((option, i)=><HomeLink key={i + "-option"} {...option}/>)
            }
        </div>
    )
}

export default Home;