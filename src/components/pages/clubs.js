import React, { Component } from 'react';
import SideBarCompnent from '../sidebar';
import LandComponent from './land';

import './clubs.css';


var loggedIn;
var clubs;
function loadClubs() {

    clubs = JSON.parse(localStorage.getItem('clubs'))
    // console.log(clubs)



}
function loadLogged() {

    loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
}


export default class ClubsComponent extends Component {


    render() {
        var clubsToDisplay;

        function displayClubs() {
            clubsToDisplay = '';
            for (let i = 0; i < clubs['clubs'].length; i++) {



                clubsToDisplay += "<div id='clubListing'>"
                clubsToDisplay += " <h2>" + clubs['clubs'][i].name + "</h2>"
                clubsToDisplay += '<br><img alt="" src=' + clubs['clubs'][i].image + ' />';
                clubsToDisplay += '<br><a   href="moreInfo?' + clubs['clubs'][i].name + '">Learn More</a>'
                clubsToDisplay += '<br><a   href="book?' + clubs['clubs'][i].name + '">Book now</a>'

                clubsToDisplay += " </div >"

            }


            if (clubsToDisplay === '')
                clubsToDisplay = '<h3>No clubs</h3>'
        }

        loadClubs();
        loadLogged();
        displayClubs();


        //  console.log(clubsToDisplay)

        if (loggedIn === null | loggedIn === undefined) {
            return (<LandComponent />)
        }
        else {

            return (
                <div>
                    <SideBarCompnent />
                    <div className='main schedules'>
                        <h1>Clubs</h1>
                        <div className='clubs' dangerouslySetInnerHTML={{ __html: clubsToDisplay }} ></div>

                    </div>
                </div >

            )
        }


    }

}