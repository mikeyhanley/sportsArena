import React, { Component } from 'react';
import SideBarCompnent from '../sidebar';

import './schedules.css';

import LandComponent from './land';
var loggedIn;
function loadLogged() {

    loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
}


var clubs;
var day;
function loadClubs() {

    clubs = JSON.parse(localStorage.getItem('clubs'))
    //console.log(clubs)



}

function getCurDay() {
    var d = new Date();
    var n = d.getDay()
    day = n + '';
    // console.log(day)
}
var clubsToDisplay;

function displayClubs() {
    var temp;
    clubsToDisplay = '';
    for (let i = 0; i < clubs['clubs'].length; i++) {
        if (clubs['clubs'][i].trainingDay === day) {
            for (let j = i + 1; j < clubs['clubs'].length; j++) {

                if (parseInt(clubs['clubs'][i].trainingTime) > parseInt(clubs['clubs'][j].trainingTime)) {
                    temp = clubs['clubs'][j];
                    clubs['clubs'][j] = clubs['clubs'][i];
                    clubs['clubs'][i] = temp;
                }
            }


            clubsToDisplay += "<div id='clubListing'>"
            clubsToDisplay += " <h2>" + clubs['clubs'][i].name + "</h2>"
            clubsToDisplay += '<br><img alt="" src=' + clubs['clubs'][i].image + ' />';
            clubsToDisplay += '<br><b>Training Time: </b>' + clubs['clubs'][i].trainingTime
            clubsToDisplay += '<br><a   href="moreInfo?' + clubs['clubs'][i].name + '">Learn More:</a>'

            clubsToDisplay += " </div >"

        }

    }
    if (clubsToDisplay === '')
        clubsToDisplay = '<h3>No clubs schedules for today</h3>'
}
export default class SchedulesComponent extends Component {


    render() {


        loadClubs();
        getCurDay();
        displayClubs();
        loadLogged();
        if (loggedIn === null | loggedIn === undefined) {
            return (<LandComponent />)

        }

        //  console.log(clubsToDisplay)

        else {
            return (
                <div>
                    <SideBarCompnent />
                    <div className='main schedules'>
                        <h1>Clubs Scheduled for Today</h1>
                        <div className='clubs' dangerouslySetInnerHTML={{ __html: clubsToDisplay }} ></div>
                    </div>
                </div >

            )
        }


    }
}
