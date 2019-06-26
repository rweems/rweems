import React, { Component } from 'react';
import concert from '../images/concert.png'
import create from '../images/create.png'
import hangman from '../images/hangman.png'
import movie from '../images/Movie-Storm.png'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class Projects extends Component {
    state = {}
    render() {
        return (
            <div class="projects">
                <div>
                    <a href="https://playlist-project.herokuapp.com/">
                        <img src={create} />
                    </a>
                    <br />
                    <a href="https://playlist-project.herokuapp.com/">Create-A-Playlist</a>
                    <p class="spacing">
                        We all listen to music on an almost daily basis. As music listeners we often create a playlist on various services, so I wanted to try my
                        hand at creating the functionality for creating a playlist. The project will allow users to create, view and edit and delete the user,
                        playlist or song. Using Ajax, Django, React and the Deezer API I have created an app that allows users to do just that. At the start of the module to
                        the user will begin by creating a profile - following step by step procedures to create their own personal playlist and allow others to view.
                    </p>
                </div>

                <div>
                    <a href="https://movie-storm.herokuapp.com/">
                        <img src={movie} />
                    </a>
                    <br />
                    <a href="https://movie-storm.herokuapp.com/">Movie-Storm</a>
                    <p class="spacing">
                        Using Ajax, Express, JavaScript, and Mongoose I created an app to keep track of movies being rented by a user. This app allows you to view the movies
                        rented, the user who rented the movie as well as some information about the user and the movie. As of right now the app does not allow for
                        the renting of movies. There is a list of users as well as movies in which you can perform full crud on.
                    </p>
                </div>

                <div>
                    <a href="https://concert-viewer.herokuapp.com/">
                        <img src={concert} />
                    </a>
                    <br />
                    <a href="https://concert-viewer.herokuapp.com/">Concert Viewer</a>
                    <p class="spacing">
                        Using bulma, handlebars, html, mongo and mongoose, I created an app to keep track of concerts. This app allows you to view the concert,
                        the bands playing at the concert as well as the members of each band with their respective roles.
                    </p>
                </div>

                <div>
                    <a href="https://rweems-hangman.netlify.com/">
                        <img src={hangman} />
                    </a>
                    <br />
                    <a href="https://rweems-hangman.netlify.com/">Hangman</a>
                    <p class="spacing">
                        For project 1, I created a simple hangman game using the technology and languages covered in class(Html, CSS, ). I used some software that would
                        allow me to add personal touches such as Stykz for mac and as well as added some of my personal favorite topics.
                    </p>
                </div>

            </div>
        );
    }
}

export default Projects;