import React, { Component } from 'react';
import SideBarCompnent from '../sidebar';
import LandComponent from './land';

import './book.css';

var trainerString = window.location.href.split('?')[1];
var loggedIn;
var bookings;
function loadBooking() {
    bookings = JSON.parse(localStorage.getItem('bookings'));
    //console.log(bookings)


}
function loadLogged() {

    loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
}




export default class MakeApointmeantComponent extends Component {


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
                "trainer": trainerString,
                "date": dateOfBooking
            })
            //console.log(bookings['bookings'])
            localStorage.setItem('bookings', JSON.stringify(bookings));
            alert('Apointmeant Made');
            window.location.href = '/bookings';

        }

    }




    render() {

        loadLogged();
        loadBooking();


        if (loggedIn === null | loggedIn === undefined) {
            return (<LandComponent />)
        }
        else {

            return (
                <div>
                    <SideBarCompnent />
                    <div className='main trainingBookings book '>
                        <h1>Add new apointmeant</h1>

                        <h2>{trainerString}</h2>
                        <br />

                        <input type="date" id="date" />

                        <br />
                        <a className='bookBtn' onClick={this.add} id='bookBtn'>Add apointmeant</a>

                    </div>
                </div >

            )
        }


    }

}