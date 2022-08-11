import React, { Component } from 'react';
import SideBarCompnent from '../sidebar';
import './moreinfo.css';
import LandComponent from './land';

var clubString = window.location.href.split('?')[1];
var club;
var trainingDay;
var loggedIn;
function loadLogged() {

    loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
}
function loadClub() {

    var clubs = JSON.parse(localStorage.getItem('clubs'))

    //console.log(clubs)

    for (let i = 0; i < clubs['clubs'].length; i++) {
        if (clubs['clubs'][i].name === clubString)
            club = clubs['clubs'][i]
    }
    // console.log(club)




}
function getTrainingDay() {
    switch (club.trainingDay) {
        case '0':
            trainingDay = "Sunday";
            break;
        case '1':
            trainingDay = "Monday";
            break;
        case '2':
            trainingDay = "Tuesday";
            break;
        case '3':
            trainingDay = "Wednesday";
            break;
        case '4':
            trainingDay = "Thursday";
            break;
        case '5':
            trainingDay = "Friday";
            break;
        case '6':
            trainingDay = "Saturday";
    }

}


export default class MoreInfoComponent extends Component {


    render() {
        loadClub();
        getTrainingDay();
        loadLogged();
        if (loggedIn === null | loggedIn === undefined) {
            return (<LandComponent />)
        }
        else {
            return (
                <div className='main moreinfo'>
                    <SideBarCompnent />
                    <h1>{club.name}</h1>
                    <div className='moreInfoClub'>

                        <img src={club.image} alt='' />
                        <div className='info'>
                            <p> <b>Facility:</b> {club.facility}</p>
                            <p> <b>Max Size:</b> {club.maxSize}</p>
                            <p> <b>Trainer: </b>{club.trainer}</p>
                            <p> <b>Season: </b>{club.operatingDate}</p>
                            <p> <b>Training Duration:</b> {club.trainingDuration}</p>
                            <p> <b>Training Day: </b>{trainingDay}</p>
                            <p><b>Calories Burnt at Training: </b> {club.calories}</p>
                        </div>
                    </div>
                </div >
            )
        }

    }
}