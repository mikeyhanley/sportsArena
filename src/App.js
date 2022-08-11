import React, { Component } from 'react';
import './App.css';
import HeaderComponent from "./components/header";
import FooterComponent from "./components/footer";
import LandComponent from "./components/pages/land";
import SignUpComponent from './components/pages/signup';
import ProfileComponent from './components/pages/profile';
import SchedulesComponent from './components/pages/schedules'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomeComponent from './components/pages/home';
import accounts from './components/data/accounts.json';
import clubs from './components/data/clubs.json';
import bookings from './components/data/booking.json';
import bmrs from './components/data/bmr.json';
import facillities from './components/data/facillities.json';
import MoreInfoComponent from './components/pages/moreinfo';
import ClubsComponent from './components/pages/clubs';
import BookingComponent from './components/pages/booking';
import BookComponent from './components/pages/book';
import DeleteBookingComponent from './components/pages/deleteBooking';
import AppointmeantComponent from './components/pages/apointmeants';
import MakeApointmeantComponent from './components/pages/makeapointmeant';
import FacillitiesComponent from './components/pages/facilities';
import BookFacillityComponent from './components/pages/bookFacilities';
import BmrComponent from './components/pages/bmr';
import BmrsComponent from './components/pages/bmrs';
if (JSON.parse(localStorage.getItem('accounts')) === null)
  localStorage.setItem('accounts', JSON.stringify(accounts));



if (JSON.parse(localStorage.getItem('clubs')) === null)
  localStorage.setItem('clubs', JSON.stringify(clubs));

if (JSON.parse(localStorage.getItem('facillities')) === null)
  localStorage.setItem('facillities', JSON.stringify(facillities));


if (JSON.parse(localStorage.getItem('bookings')) === null)
  localStorage.setItem('bookings', JSON.stringify(bookings));


if (JSON.parse(localStorage.getItem('bmrs')) === null)
  localStorage.setItem('bmrs', JSON.stringify(bmrs));






class App extends Component {


  render() {






    return (
      <div className="App">

        <Router className="router">

          <HeaderComponent />

          <Switch>

            <Route path="/" exact component={LandComponent} />
            <Route path="/signup" exact component={SignUpComponent} />
            <Route path="/home" exact component={HomeComponent} />
            <Route path="/profile" exact component={ProfileComponent} />
            <Route path="/schedules" exact component={SchedulesComponent} />
            <Route path="/moreinfo" exact component={MoreInfoComponent} />
            <Route path="/clubs" exact component={ClubsComponent} />
            <Route path="/bookings" exact component={BookingComponent} />
            <Route path="/deleteBooking" exact component={DeleteBookingComponent} />
            <Route path="/book" exact component={BookComponent} />
            <Route path="/apointmeants" exact component={AppointmeantComponent} />
            <Route path="/makeapointmeant" exact component={MakeApointmeantComponent} />
            <Route path="/facilities" exact component={FacillitiesComponent} />
            <Route path="/bookfacillities" exact component={BookFacillityComponent} />
            <Route path="/bmr" exact component={BmrComponent} />
            <Route path="/bmrs" exact component={BmrsComponent} />



          </Switch>
          <FooterComponent />
        </Router>
      </div >
    );

  }
}

export default App;
