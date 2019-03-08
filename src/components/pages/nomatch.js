import React from 'react';
import {Link} from 'react-router-dom';

export default function NoMatch(){
    return(
        <div>
            <h2>no matches to that url</h2>
            <Link to="/">back home</Link>
        </div>
    )
}