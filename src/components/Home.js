import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class Home extends Component {
    state = {}
    render() {
        return (
            <div>
                <p>
                    <strong>
                        Hello, I'm Rickey Weems a Software Engineer with a B.A. in Computer Science. Below I have a link to my projects, linkedin, and github.
                        <br />

                        Enjoy my portfolio.
                    </strong>
                    <br />
                    <br />
                </p>
                <Link to='/rweems/projects'>
                    <button onclick="location.href='/projects'">
                        View my Projects
                    </button>
                </Link>
                <br />
                <a href="https://github.com/rweems">Github</a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://www.linkedin.com/in/rickeyweems/">Linkedin</a>

            </div>
        );
    }
}

export default Home;