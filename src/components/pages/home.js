import React, { Component } from 'react';
import SideBarCompnent from '../sidebar';
import './home.css';
import LandComponent from './land';
import Img from "../../assests/sports.jpg"

var loggedIn;
function loadLogged() {

    loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
}

export default class HomeComponent extends Component {


    render() {
        loadLogged();
        if (loggedIn === null | loggedIn === undefined) {
            // console.log(loggedIn)
            return (<LandComponent />)
        }
        else {
            return (
                <div>
                    <SideBarCompnent />
                    <div className='main home'>
                        <h1>C.I.T Sports Arena</h1>
                        <div id="sportImg">
                            <img src={Img} alt="" />
                        </div>
                        <h2>welcome to the sports arena website</h2>

                    </div>
                </div>
            )
        }


    }
}
