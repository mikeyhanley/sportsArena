import React, { Component } from 'react';
import SideBarCompnent from '../sidebar';
import LandComponent from './land';

import './apointmeants.css';


var loggedIn;
var trainers;
var accounts;
function loadTrainers() {
    trainers = [];
    accounts = JSON.parse(localStorage.getItem('accounts'))
    for (let i = 0; i < accounts['accounts'].length; i++) {
        if (accounts['accounts'][i].status === 'staff') {
            trainers.push(accounts['accounts'][i])
        }

    }
    //console.log(trainers)


}
function loadLogged() {

    loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
}


export default class AppointmeantComponent extends Component {


    render() {
        var trainersToDisplay;

        function displayTrainers() {
            trainersToDisplay = '';
            for (let i = 0; i < trainers.length; i++) {



                trainersToDisplay += "<div id='trainerListing'>"
                trainersToDisplay += " <h2>" + trainers[i].firstName + " " + trainers[i].lastName + "</h2>"
                trainersToDisplay += "<br><p><b>Club: </b>" + trainers[i].club + "</p>"
                trainersToDisplay += '<br><a   href="makeapointmeant?' + trainers[i].username + '">Make apointmeant now</a>'

                trainersToDisplay += " </div >"

            }


            if (trainersToDisplay === '')
                trainersToDisplay = '<h3>No trainers</h3>'
        }

        loadTrainers();
        loadLogged();
        displayTrainers();



        //  console.log(clubsToDisplay)

        if (loggedIn === null | loggedIn === undefined) {
            return (<LandComponent />)
        }
        else {

            return (
                <div>
                    <SideBarCompnent />
                    <div className='main trainerApointmeants'>
                        <h1>Trainer Apointmeant</h1>
                        <div className='trainers' dangerouslySetInnerHTML={{ __html: trainersToDisplay }} ></div>

                    </div>
                </div >

            )
        }


    }

}