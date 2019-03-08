import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


export default class NavigationContainer extends Component{
    render(){
    return(
        <div>
            <NavLink className="NL" exact to="/">Home</NavLink>
            <NavLink className="NL" to="/about">About</NavLink>
            <NavLink className="NL" to="/contact">Contact</NavLink>
            <NavLink className="NL" to="/blog">Blog</NavLink>
            {false ? <NavLink to="/">Add Blog</NavLink> : null}
        </div>
        )
    }
}