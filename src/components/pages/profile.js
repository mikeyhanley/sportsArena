import React, { Component } from 'react';
import SideBarCompnent from '../sidebar';
import './profile.css';
import LandComponent from './land';

var accObj
function loadAcc() {

    accObj = JSON.parse(localStorage.getItem('accounts'))



}
var loggedIn;
var membershipOE;
var membershipOY;

function loadLogged() {

    loggedIn = JSON.parse(localStorage.getItem('loggedIn'));

    if (loggedIn.membership === 'openEnded') {
        membershipOE = true
        membershipOY = false
    }
    else {
        membershipOE = false
        membershipOY = true
    }

}




export default class ProfileComponent extends Component {
    constructor(props) {
        super(props);
        this.handleProfileUpdate = this.handleProfileUpdate.bind(this);

    }

    handleProfileUpdate() {
        var firstName = document.getElementById('fName').value;
        var lName = document.getElementById('lName').value;
        var username = document.getElementById('newUserName').value;
        var email = document.getElementById('newEmail').value;
        var pass = document.getElementById('psw').value;
        var passRepeat = document.getElementById('pswRepeat').value;
        var phone = document.getElementById('phone').value;
        var age = document.getElementById('age').value;
        var weight = document.getElementById('weight').value;
        var height = document.getElementById('height').value;
        var address = document.getElementById('address').value;





        var membershipRadio = document.getElementsByName('membership');
        var membership = ''
        for (var k = 0; k < membershipRadio.length; k++) {
            if (membershipRadio[k].checked) {
                membership = membershipRadio[k].value
                break;
            }
        }





        if (pass !== passRepeat)
            alert('Passwords do not match!')
        else {
            // console.log(accObj)

            for (let index = 0; index < accObj['accounts'].length; index++) {

                if (accObj['accounts'][index].username === loggedIn.username) {
                    //  console.log("userName" + username)
                    if (username !== '') {
                        accObj['accounts'][index].username = username;
                        //console.log(accObj['accounts'][index].username)
                        loggedIn.username = username
                    }
                    if (pass !== '') {
                        accObj['accounts'][index].password = pass;
                        loggedIn.password = pass;





                    }
                    if (firstName !== '') {
                        accObj['accounts'][index].firstName = firstName;
                        loggedIn.firstName = firstName;
                    }

                    if (lName !== '') {
                        accObj['accounts'][index].lastName = lName;
                        loggedIn.lastName = lName;
                    }
                    if (email !== '') {
                        accObj['accounts'][index].email = email;
                        loggedIn.email = email;
                    }
                    if (age !== '') {
                        accObj['accounts'][index].age = age;
                        loggedIn.age = age
                    }
                    if (weight !== '') {
                        accObj['accounts'][index].weight = weight;
                        loggedIn.weight = weight;
                    }
                    if (height !== '') {
                        accObj['accounts'][index].height = height;
                        loggedIn.height = height;
                    }
                    if (address !== '') {
                        accObj['accounts'][index].address = address;
                        loggedIn.address = address;
                    }
                    if (phone !== '') {
                        accObj['accounts'][index].phone = phone;
                        loggedIn.phone = phone;
                    }
                    if (membership !== '') {
                        accObj['accounts'][index].membership = membership;
                        loggedIn.membership = membership
                    }
                }
            }
            // console.log('accOb' + JSON.stringify(accObj['accounts']))
            localStorage.setItem('accounts', JSON.stringify(accObj));
            localStorage.setItem('loggedIn', JSON.stringify(loggedIn));
            if (pass !== '') {
                alert('Password Updated')
            }
            window.location.href = '/home';

        }
    }




    render() {
        loadAcc();
        loadLogged();
        if (loggedIn === null | loggedIn === undefined) {
            return (<LandComponent />)

        }

        else {

            return (
                <div>
                    <SideBarCompnent />
                    <div className='main signUpForum updateProfile'>

                        <h1>Update Profile</h1>

                        <label ><b>First Name</b></label>
                        <input type="text" placeholder={loggedIn.firstName} id="fName" />

                        <label ><b>Last Name</b></label>
                        <input type="text" placeholder={loggedIn.lastName} id="lName" />

                        <label ><b>User Name</b></label>
                        <input type="text" placeholder={loggedIn.username} id="newUserName" />
                        <label ><b>Email</b></label>
                        <input type="text" placeholder={loggedIn.email} id="newEmail" />
                        <label ><b>Phone:</b></label>
                        <input type="text" placeholder={loggedIn.phone} id="phone" />
                        <label ><b>Address:</b></label>
                        <input type="text" placeholder={loggedIn.address} id="address" />

                        <label ><b>Password</b></label>
                        <input type="password" placeholder="Enter New Password" id="psw" />

                        <label><b>Repeat Password</b></label>
                        <input type="password" placeholder="Repeat Password" id="pswRepeat" />

                        <label ><b>Age:</b></label>
                        <input type="number" id="age" placeholder={loggedIn.age} />
                        <label ><b>Weight in Kg:</b></label>
                        <input type="number" id="weight" placeholder={loggedIn.weight} />
                        <label ><b>Height in M:</b></label>
                        <input type="number" id="height" placeholder={loggedIn.height} />
                        <b>Please select your membership:</b>

                        <div className='radio'>
                            <input type="radio" name="membership" value="openEnded" defaultChecked={membershipOE} />
                            <label htmlFor="open-ended">Open Ended</label>
                            <input type="radio" name="membership" value="oneYear" defaultChecked={membershipOY} />

                            <label htmlFor="oneYear">One Year</label>



                        </div>
                        <p onClick={this.handleProfileUpdate} className="signupbtn">Update Profile</p>
                        <a href="/" className="signupbtn">Cancel</a>

                    </div>
                </div >


            )

        }

    }
}

