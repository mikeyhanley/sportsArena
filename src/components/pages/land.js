import React, { Component } from 'react';
import './land.css';
import Img from "../../assests/sports-hall.jpg"
import HomeComponent from './home';

var loggedIn = { firstName: 'not logged' }
function loadLogged() {

    loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
}


export default class LandComponent extends Component {
    render() {

        loadLogged()
        if (loggedIn === null) {

            return (<div className='mainLand'>

                <div id="sportImg">
                    <img src={Img} alt="" />
                </div>
                <div className="paragraphs">
                    <div className="paragraph">
                        <h3>Sign Up</h3>
                        <p>Sign up for a free account using your email address.</p>
                    </div>
                    <div className="paragraph">
                        <h3>Clubs</h3>
                        <p>See the daily scedule of all the C.I.T sports Clubs.</p>
                    </div>
                    <div className="paragraph">
                        <h3>Training</h3>
                        <p>Book time slots for personal trainig in the sports arena.</p>
                    </div>
                    <div className="paragraph">
                        <h3>Fitness Paln</h3>
                        <p>Manage a fitness training plan with a personal fitness log.</p>
                    </div>

                    <div className="buttonContainer">
                        <a href="signup" className="bigButton">Sign Up</a>
                    </div>
                </div>
            </div>
            )
        }
        else {
            return (
                <HomeComponent />
            )
        }
    }
}