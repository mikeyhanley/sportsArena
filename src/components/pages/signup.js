import React, { Component } from 'react';
import './signup.css';

var accObj
function loadAcc() {

    accObj = JSON.parse(localStorage.getItem('accounts'))



}



export default class SignUpComponent extends Component {
    constructor(props) {
        super(props);
        this.handleSignUpClick = this.handleSignUpClick.bind(this);

    }
    handleSignUpClick() {
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

        var genderRadio = document.getElementsByName('gender');
        var gender = ''
        for (var i = 0; i < genderRadio.length; i++) {
            if (genderRadio[i].checked) {
                gender = genderRadio[i].value
                break;
            }
        }



        var membershipRadio = document.getElementsByName('membership');
        var membership = ''
        for (var k = 0; k < membershipRadio.length; k++) {
            if (membershipRadio[k].checked) {
                membership = membershipRadio[k].value
                break;
            }
        }




        if (firstName === '' | lName === '' | email === '' | pass === '' | passRepeat === '' | username === '' | phone === '' | age === '' | weight === '' | height === '' | gender === '' | membership === '') {
            alert('Please fill out form!')
            //  console.log("username" + username + "email" + email + "firstName" + firstName + "lastName" + lName + "password" + pass + "gender" + gender + "age" + age + "weight" + weight + "height" + height + "address" + address + "phone" + phone + + "membership" + membership)
        }
        else if (pass !== passRepeat)
            alert('Passwords do not match!')
        else {
            // console.log(accObj)
            accObj['accounts'].push({
                "username": username, "email": email, "firstName": firstName, "lastName": lName, "password": pass, "gender": gender, "age": age, "weight": weight, "height": height, "address": address, "phone": phone, "membership": membership, "status": "student"
            })
            //   console.log(accObj)
            var loggInAccc = { username: username, email: email, firstName: firstName, lastName: lName, password: pass, gender: gender, age: age, weight: weight, height: height, address: address, phone: phone, membership: membership, status: 'student' }
            localStorage.setItem('accounts', JSON.stringify(accObj));
            localStorage.setItem('loggedIn', JSON.stringify(loggInAccc));
            window.location.href = '/home';

        }
    }




    render() {
        loadAcc()
        return (
            <div className='main signUpForum'>

                <h1>Sign Up</h1>

                <label ><b>First Name</b></label>
                <input type="text" placeholder="Enter First Name" id="fName" />

                <label ><b>Last Name</b></label>
                <input type="text" placeholder="Enter Last Name" id="lName" />

                <label ><b>User Name</b></label>
                <input type="text" placeholder="Enter User-Name" id="newUserName" />
                <label ><b>Email</b></label>
                <input type="text" placeholder="Enter Email" id="newEmail" />
                <label ><b>Phone:</b></label>
                <input type="text" placeholder="Enter Phone" id="phone" />
                <label ><b>Address:</b></label>
                <input type="text" placeholder="Enter Address" id="address" />

                <label ><b>Password</b></label>
                <input type="password" placeholder="Enter Password" id="psw" />

                <label><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" id="pswRepeat" />

                <b>Please select your gender:</b>
                <div className='radio'>
                    <input type="radio" name="gender" value="male" />
                    <label htmlFor="male">Male</label>
                    <input type="radio" name="gender" value="female" />
                    <label htmlFor="female">Female</label>


                </div>
                <label ><b>Age:</b></label>
                <input type="number" id="age" placeholder="age" />
                <label ><b>Weight in Kg:</b></label>
                <input type="number" id="weight" placeholder="Weight" />
                <label ><b>Height in M:</b></label>
                <input type="number" id="height" placeholder="Height" />

                <b>Please select your membership:</b>

                <div className='radio'>
                    <input type="radio" name="membership" value="openEnded" />
                    <label htmlFor="open-ended">Open Ended</label>
                    <input type="radio" name="membership" value="oneYear" />

                    <label htmlFor="oneYear">One Year</label>



                </div>
                <p onClick={this.handleSignUpClick} className="signupbtn">Sign Up</p>
                <a href="/" className="signupbtn">Cancel</a>

            </div>


        )

    }
}