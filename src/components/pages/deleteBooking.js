import React, { Component } from 'react';
import SideBarCompnent from '../sidebar';
import LandComponent from './land';

import './deleteBooking.css';

var bookingString = window.location.href.split('?')[1];

var loggedIn;
var bookings;
function loadBooking() {
    bookings = JSON.parse(localStorage.getItem('bookings'));
    // console.log(bookings)


}
function loadLogged() {

    loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
}
function deleteBooking() {
    for (let i = 0; i < bookings['bookings'].length; i++) {
        //console.log(bookings['bookings'][i].number)
        //  console.log(bookingString)

        if (bookings['bookings'][i].number === bookingString) {
            bookings['bookings'].splice(i, 1);
            //console.log('match')

        }

        console.log(bookings)
    }
    localStorage.setItem('bookings', JSON.stringify(bookings));
    window.location.href = '/bookings';


}
export default class DeleteBookingComponent extends Component {


    render() {

        loadLogged();
        loadBooking();
        deleteBooking();

        //  console.log(clubsToDisplay)

        if (loggedIn === null | loggedIn === undefined) {
            return (<LandComponent />)
        }
        else {

            return (
                <div>
                    <SideBarCompnent />
                    <div className='main trainingBookings'>

                    </div>
                </div >

            )
        }


    }

}