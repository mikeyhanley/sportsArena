import React, { Component } from 'react';
import SideBarCompnent from '../sidebar';
import LandComponent from './land';

import './book.css';

var bookingString = window.location.href.split('?')[1];
var club;
var loggedIn;
var bookings;
function loadBooking() {
    bookings = JSON.parse(localStorage.getItem('bookings'));
    console.log(bookings)


}
function loadLogged() {

    loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
}

function loadClub() {

    var clubs = JSON.parse(localStorage.getItem('clubs'))

    //  console.log(clubs)

    for (let i = 0; i < clubs['clubs'].length; i++) {
        if (clubs['clubs'][i].name === bookingString)
            club = clubs['clubs'][i]
    }
    // console.log(club)




}


export default class BookComponent extends Component {


    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
    }

    add() {
        var id = bookings['bookings'].length + 1
        id = id + '';
        var dateOfBooking = document.getElementById('date').value

        if (dateOfBooking === '')
            alert('Please fill out Date!')

        else {
            bookings['bookings'].push({
                "number": id,
                "username": loggedIn.username,
                "club": bookingString,
                "date": dateOfBooking
            })
            //console.log(bookings['bookings'])
            localStorage.setItem('bookings', JSON.stringify(bookings));
            alert('Booking Made');
            window.location.href = '/bookings';

        }

    }




    render() {

        loadLogged();
        loadBooking();
        loadClub();

        //  console.log(clubsToDisplay)

        if (loggedIn === null | loggedIn === undefined) {
            return (<LandComponent />)
        }
        else {

            return (
                <div>
                    <SideBarCompnent />
                    <div className='main trainingBookings book '>
                        <h1>Add new Booking</h1>

                        <h2>{club.name}</h2>
                        <br />
                        <img src={club.image} alt='' />
                        <br />
                        <input type="date" id="date" />

                        <br />
                        <a className='bookBtn' onClick={this.add} id='bookBtn'>Add booking</a>

                    </div>
                </div >

            )
        }


    }

}