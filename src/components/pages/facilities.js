import React, { Component } from 'react';
import SideBarCompnent from '../sidebar';
import LandComponent from './land';

import './facilities.css';


var loggedIn;
var facillities;
function loadCFacillities() {

    facillities = JSON.parse(localStorage.getItem('facillities'))
    //console.log(facillities)



}
function loadLogged() {

    loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
}


export default class FacillitiesComponent extends Component {


    render() {
        var facillitiesToDisplay;

        function displayFacillities() {
            facillitiesToDisplay = '';
            for (let i = 0; i < facillities['facillities'].length; i++) {



                facillitiesToDisplay += "<div id='facillitieListing'>"
                facillitiesToDisplay += " <h2>" + facillities['facillities'][i].name + "</h2>"
                facillitiesToDisplay += "<br> <p><b>Loaction: </b>" + facillities['facillities'][i].location + "</p>"
                facillitiesToDisplay += "<br> <p><b>ID: </b>" + facillities['facillities'][i].id + "</p>"
                // facillitiesToDisplay += " <h3>" + facillities['facillities'][i].location + "</h3>"
                facillitiesToDisplay += '<br><a   href="bookfacillities?' + facillities['facillities'][i].name + '">Book now</a>'

                facillitiesToDisplay += " </div >"

            }


            if (facillitiesToDisplay === '')
                facillitiesToDisplay = '<h3>No facillities</h3>'
        }

        loadCFacillities();
        loadLogged();
        displayFacillities();



        if (loggedIn === null | loggedIn === undefined) {
            return (<LandComponent />)
        }
        else {

            return (
                <div>
                    <SideBarCompnent />
                    <div className='main '>
                        <h1>Facillities</h1>
                        <div className='facillities' dangerouslySetInnerHTML={{ __html: facillitiesToDisplay }} ></div>

                    </div>
                </div >

            )
        }


    }

}