import React, { Component } from 'react';
import SideBarCompnent from '../sidebar';
import LandComponent from './land';

import './bmr.css';

var loggedIn;
var bmrs
var bmrRating;



function loadLogged() {

    loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
}
function loadBmr() {

    bmrs = JSON.parse(localStorage.getItem('bmrs'));
    // console.log(bmrs)
}
function getBMR() {
    if (loggedIn.gender === 'male') {
        //alert('male')
        bmrRating = 66.5 + (13.75 * loggedIn.weight) + (5.003 * loggedIn.height) - (6.755 * loggedIn.age)
        bmrRating = bmrRating.toFixed(2);

    }
    else {
        bmrRating = 655 + (4.35 * loggedIn.weight) + (4.7 * loggedIn.height) - (4.7 * loggedIn.age)
        bmrRating = bmrRating.toFixed(2);



    }
}



export default class BmrComponent extends Component {

    constructor(props) {
        super(props);
        this.getMeal = this.getMeal.bind(this);
        this.logBmr = this.logBmr.bind(this);

    }
    logBmr() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        today = dd + '/' + mm + '/' + yyyy;
        //  console.log(today);
        // console.log(bmrRating);

        bmrs['bmr'].push({
            "bmr": bmrRating,
            "username": loggedIn.username,

            "date": today
        })
        localStorage.setItem('bmrs', JSON.stringify(bmrs));
        alert('BMR Logged');
        window.location.href = '/bmrs';

    }
    getMeal() {



        var activityRadio = document.getElementsByName('activity');
        var activity = ''
        for (var i = 0; i < activityRadio.length; i++) {
            if (activityRadio[i].checked) {
                activity = activityRadio[i].value
                break;
            }
        }
        if (activity === '') {
            alert('Please fill in activitiy')
        }

        else {
            var calories = bmrRating * activity;
            calories = calories.toFixed(2);


            var mealPlanString = ''
            mealPlanString += "<h2>Meal Plan</h2>"
            mealPlanString += "<br><p><b>Reccomend daily calorie input: </b>" + calories + "</p>"
            document.getElementById('mealPlan').innerHTML = mealPlanString
        }
    }



    render() {

        loadLogged();
        getBMR();
        loadBmr();



        if (loggedIn === null | loggedIn === undefined) {
            return (<LandComponent />)
        }
        else {

            return (
                <div>
                    <SideBarCompnent />
                    <div className='main trainingBookings book '>
                        <h1>BMR</h1>

                        <h2>Your BMR rating is {bmrRating}</h2>
                        <br />

                        <b>Please select your activity factor:</b>
                        <br />
                        <div className='radio'>
                            <input type="radio" name="activity" value="1.2" />
                            <label htmlFor="1.2">sedentary</label>

                            <input type="radio" name="activity" value="1.375" />
                            <label htmlFor="1.375"> lightly active</label>

                            <input type="radio" name="activity" value="1.55" />
                            <label htmlFor="1.55">  moderately active</label>

                            <input type="radio" name="activity" value="1.725" />
                            <label htmlFor="1.55">very active </label>

                            <input type="radio" name="activity" value="1.9" />
                            <label htmlFor="1.9">extra active </label>





                        </div>
                        <br />
                        <div className="bmrBtns">
                            <a className='bmrBtn' onClick={this.getMeal} > get Meal Plan</a>

                            <a className='bmrBtn' onClick={this.logBmr} >Log BMR</a>

                            <a className='bmrBtn' href='/bmrs' >Display BMR Logs</a>

                            <div id='mealPlan'>
                            </div>
                        </div>
                    </div>
                </div >

            )
        }


    }

}