import React, { Component } from 'react';
import { users } from '../models/user';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName : '',
            password : '',
            user : null,
            isLoggedIn : false
        };
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        const target = event.target;
        let inputUserName = this.state.userName;
        let inputPassword = this.state.password;
        if (target.type === 'text') {
            inputUserName = target.value;
        }
        else inputPassword = target.value;

        this.setState({
            userName: inputUserName,
            password: inputPassword,
        });
    }

    submit(event) {
        event.preventDefault();
        if (this.isLoginValid()) {
            for (let user of users) {
                if (user.userName.match(this.state.userName)) {
                    this.state.user = user;
                    this.state.isLoggedIn = true;
                    document.getElementById("form").hidden = true;
                    document.getElementById("greeting").hidden = false;
                    document.getElementById("greeting-message").innerText = 'Hello, ' + this.state.user.firstName + '!';
                    break;
                }
            }
        }
        console.log(this.state.user);
    }

    isLoginValid() {
        document.getElementById("userNameDanger").innerText = '';
        document.getElementById("passwordDanger").innerText = '';
        let errorMessage = '';
        let isValid = true;
        let index = -1;
        try {
            if (this.state.userName === '') {
                errorMessage = "User Name required.";
                document.getElementById("userNameDanger").innerText = errorMessage;
                throw new Error(errorMessage);
            }
            for (let user of users) {
                index ++;
                if (index === (users.length - 1) && !user.userName.match(this.state.userName)) {
                    errorMessage = "No user found with that User Name.";
                    document.getElementById("userNameDanger").innerText = errorMessage;
                    throw new Error(errorMessage);
                }
                else if (!user.userName.match(this.state.userName)) {
                    continue;
                }
                else if (this.state.password === '') {
                    errorMessage = "Password required.";
                    document.getElementById("passwordDanger").innerText = errorMessage;
                    throw new Error(errorMessage);
                }
                else if (!user.password.match(this.state.password)) {
                    errorMessage = "Incorrect password.";
                    document.getElementById("passwordDanger").innerText = errorMessage;
                    throw new Error(errorMessage);
                }
                else break;
            }
        } catch (error) {
            isValid = false;
            console.log(error);
        }
        return isValid;
    }

    render() { 
        return (
            <React.Fragment>
                <form className="container" id="form" hidden={this.state.isLoggedIn}>
                    <div className="form-group">
                        <label htmlFor="userName" className="form-label">User Name</label>
                        <input type="text" className="form-control" onChange={this.handleChange} value={this.state.userName} style={{width:"auto"}}/>
                        <span className="text-danger" id="userNameDanger"></span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" onChange={this.handleChange} value={this.state.password} style={{width:"auto"}}/>
                        <span className="text-danger" id="passwordDanger"></span>
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-primary" onClick={this.submit}>Login</button>
                    </div>
                </form>
                <div className="container" id="greeting" hidden={!this.state.isLoggedIn}>
                    <span className="text" id="greeting-message"></span>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Login;