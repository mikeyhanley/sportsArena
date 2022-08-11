import React, { Component } from 'react';
import './sidebar.css';
var loggedIn;
function loadLogged() {

    loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
}
export default class SideBarCompnent extends Component {

    render() {
        var sideBarContent;

        loadLogged();
        if (loggedIn === null | loggedIn === undefined) {
            return (null)
        }
        else {

            if (loggedIn.status === 'student') {
                sideBarContent =
                    <div className="sidenav">
                        <a href="/profile">Profile</a>
                        <a href="/schedules">Clubs Schedules</a>
                        <a href="/clubs">Clubs</a>

                        <a href="/bookings">Bookings</a>
                        <a href="/bmr">Personal Fitness</a>
                        <a href="/apointmeants">Make Apointmeant</a>
                    </div>

            }
            else if (loggedIn.status === 'staff') {
                sideBarContent =
                    <div className="sidenav">
                        <a href="/schedules">Clubs Schedules</a>
                        <a href="/facilities">Facilities</a>
                        <a href="/bookings">Bookings</a>


                    </div>

            }


            return (
                <div>
                    {sideBarContent}

                </div>

            )
        }

    }
}
