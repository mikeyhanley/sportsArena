import React, { Component } from 'react';
import SideBarCompnent from '../sidebar';

import './booking.css';
import LandComponent from './land';
var loggedIn;
var bmrs;
var bmrsToDisplay;



function loadLogged() {

    loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
} function loadBmrs() {
    bmrs = JSON.parse(localStorage.getItem('bmrs'));


}
function displayBmrs() {
    bmrsToDisplay = '';
    for (let i = 0; i < bmrs['bmr'].length; i++) {

        if (bmrs['bmr'][i].username === loggedIn.username) {



            bmrsToDisplay += "<div id='booking'>"



            bmrsToDisplay += " <h2>BMR:  </h2>"
            bmrsToDisplay += " <h2>" + bmrs['bmr'][i].bmr + "</h2>"
            bmrsToDisplay += " <br> <p><b>Date </b>" + bmrs['bmr'][i].date + "</p>"
            bmrsToDisplay += " <br/ >"
            bmrsToDisplay += "<a href = 'https://twitter.com/share' > Tweet your progress</a> "


            bmrsToDisplay += " </div >"


        }
        console.log(bmrsToDisplay)
    }

    if (bmrsToDisplay === '')
        bmrsToDisplay = '<h3>No BMR Logs</h3>'
}



export default class BmrsComponent extends Component {


    render() {
        loadLogged();
        loadBmrs();
        displayBmrs();



        //  console.log(clubsToDisplay)
        if (loggedIn === null | loggedIn === undefined) {
            return (<LandComponent />)
        }
        else {
            return (
                <div className='main trainingBookings'>

                    <SideBarCompnent />
                    <h1> BMR Logs</h1>
                    <div className='bookings' dangerouslySetInnerHTML={{ __html: bmrsToDisplay }}></div>
                </div >

            )
        }

    }
}
