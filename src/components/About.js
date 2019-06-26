import React, { Component } from 'react';


class About extends Component {
    state = {}
    render() {
        return (
            <div className="projects">
                <p>Q&A</p>
                <p className="question">
                    What first sparked your interest in your desired field?
                </p>

                <p className="answer">
                    I’ve never known anything other than computers. Growing up there were always computers around the house.
                    My mother is a programmer as well so the love for programming and learning different ways to use a computer comes from her.
                </p>

                <p className="question">
                    How have your career interests evolved and changed over time? What inspired them to evolve?
                </p>

                <p className="answer">
                    My career interest over time has not changed drastically. The changes are mainly where i want to work or the specific role
                    in programming that I would like to do for the company. The most recent changes I thought about were between going for a
                    front-end or back-end position.
                </p>

                <p className="question">
                    What are your greatest professional accomplishments? What results did you achieve? For whom?
                </p>

                <p className="answer">
                For my senior project in college, my group was tasked with making a personal GPS tracker for people who are working on 
                the railroad. We finished the software side but had an issue with trying to decide what would be comfortable for the 
                person wearing it. This task was given to us by railserve who is a Berkshire Hathaway company. 
                </p>

                <p className="question">
                What do you like to do? What do you like to do that others do not?
                </p>

                <p className="answer">
                I enjoy going to concerts, watching anime, playing games, watching movies, watching low ranked movies on Sundays, and 
                hanging out with friends and family. At night I like to drive around to get fresh air and not worry about Atlanta's bad 
                drivers. 
                </p>
                <br />
                <br />

            </div>
        );
    }
}

export default About;