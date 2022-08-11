import React, { Component } from 'react';
import SideBarCompnent from '../sidebar';
import LandComponent from './land';

import './book.css';

var facillityString = window.location.href.split('?')[1];
var loggedIn;
var bookings;
function loadBooking() {
    bookings = JSON.parse(localStorage.getItem('bookings'));
    //console.log(bookings)


}
function loadLogged() {

    loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
}




export default class BookFacillityComponent extends Component {


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
                "facillity": facillityString,
                "date": dateOfBooking
            })
            //console.log(bookings['bookings'])
            localStorage.setItem('bookings', JSON.stringify(bookings));
            alert('Facillity Booked');
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
                    <div className='main  book '>
                        <h1>Book Facillities</h1>

                        <h2>{facillityString}</h2>
                        <br />

                        <input type="date" id="date" />

                        <br />
                        <a className='bookBtn' onClick={this.add} id='bookBtn'>Book facillity</a>

                    </div>
                </div >

            )
        }


    }

}