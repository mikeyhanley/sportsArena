import React, { Component } from 'react';
import SideBarCompnent from '../sidebar';

import './booking.css';
import LandComponent from './land';
var loggedIn;
var bookings;
var bookingsToDisplay;



function loadLogged() {

    loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
} function loadBooking() {
    bookings = JSON.parse(localStorage.getItem('bookings'));
    //console.log(bookings)


}
function displayBookings() {
    bookingsToDisplay = '';
    var clubOrTrainerOrFacillitiy;
    for (let i = 0; i < bookings['bookings'].length; i++) {

        if (bookings['bookings'][i].username === loggedIn.username) {



            bookingsToDisplay += "<div id='booking'>"
            if (bookings['bookings'][i].club !== undefined)
                clubOrTrainerOrFacillitiy = bookings['bookings'][i].club
            else if (bookings['bookings'][i].trainer !== undefined)
                clubOrTrainerOrFacillitiy = bookings['bookings'][i].trainer
            else if (bookings['bookings'][i].facillity !== undefined)
                clubOrTrainerOrFacillitiy = bookings['bookings'][i].facillity


            bookingsToDisplay += " <h2>" + clubOrTrainerOrFacillitiy + "</h2>"
            bookingsToDisplay += " <br> <p><b>Booking Number: </b>" + bookings['bookings'][i].number + "</p>"
            bookingsToDisplay += " <br> <p><b>Date </b>" + bookings['bookings'][i].date + "</p>"
            bookingsToDisplay += '<br><a href="deleteBooking?' + bookings['bookings'][i].number + '">Cancel</a>'

            bookingsToDisplay += " </div >"

        }
        //console.log(bookingsToDisplay)
    }

    if (bookingsToDisplay === '')
        bookingsToDisplay = '<h3>No Bookings</h3>'
}



export default class BookingComponent extends Component {


    render() {
        loadLogged();
        loadBooking();
        displayBookings();



        //  console.log(clubsToDisplay)
        if (loggedIn === null | loggedIn === undefined) {
            return (<LandComponent />)
        }
        else {
            return (
                <div className='main trainingBookings'>

                    <SideBarCompnent />
                    <h1> Bookings</h1>
                    <div className='bookings' dangerouslySetInnerHTML={{ __html: bookingsToDisplay }}></div>
                </div >

            )
        }

    }
}
