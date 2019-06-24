import React, { Component } from 'react';
import image from "../images/me.jpg"
class side extends Component {
    state = {  }
    render() { 
        return ( 
            <nav>
                <img src={image} />
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Contacts</a>
            </nav>
         );
    }
}
 
export default side;