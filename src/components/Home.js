import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class Home extends Component {
    state = {}
    render() {
        return (
            <div>
                <p>
                    Hello, I'm Rickey Weems a Software Engineer with a B.A. in Computer Science.
                    <br />
                    <br />
                </p>
                <Link to='/projects'>
                    <button onclick="location.href='/projects'">
                        View my Projects
                    </button>
                </Link>
            </div>
        );
    }
}

export default Home;