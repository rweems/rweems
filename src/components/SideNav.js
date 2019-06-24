import React, { Component } from 'react';
import image from "../images/me.jpg"
class side extends Component {
    state = {  }
    render() { 
        return ( 
            <nav>
                <img src={image} />
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/projects">Projects</a>
                <a href="/contacts">Contacts</a>
            </nav>
         );
    }
}
 
export default side;