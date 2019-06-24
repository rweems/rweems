import React, { Component } from 'react';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <p>
                    Hello, I'm Rickey Weems a Software Engineer with a B.A. in Computer Science.
                    <br />
                    <br />
                </p>
                <button onclick="location.href='/projects'">View my Projects</button>
            </div>
         );
    }
}
 
export default Home;