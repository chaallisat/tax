import React, { Component } from "react";
import Nav from "../../components/Nav"
import {getFromStorage, setInStorage} from "../../utils/storage"
import "./login.css";
import 'whatwg-fetch';

// function App() {
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      token: '',
      signUpError: '',
      signInError: '',
      signInEmail: '',
      signInPassword: '',
      signUpFirstName: '',
      signUpLastName: '',
      signUpEmail: '',
      signUpPassword: '',
    };

    this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
    this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
    this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
    this.onTextboxChangeSignUpFirstName = this.onTextboxChangeSignUpFirstName.bind(this);
    this.onTextboxChangeSignUpLastName = this.onTextboxChangeSignUpLastName.bind(this);

    this.onSignIn = this.onSignIn.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    const obj = getFromStorage('the_main_app');
    if (obj && obj.token) {
      const { token } = obj;
      // Verify token
      fetch('/api/account/verrify?token=' + token)
        .then(res => res.json())
        .then(json => {
          if(json.sucess) {
            this.setState({
              token,
              isLoading: false
            })
          } else {
            this.setState({
              isLoading: false,
            })
          }
        });
    } else {
      this.setState({
        isLoading: false,
      });
    }
  }

  onTextboxChangeSignInEmail(event) {
    this.setState({
      signInEmail: event.target.value,
    });
  }

  onTextboxChangeSignInPassword(event) {
    this.setState({
      signInPassword: event.target.value,
    });
  }

  onTextboxChangeSignUpEmail(event) {
    this.setState({
      signUpEmail: event.target.value,
    });
  }

  onTextboxChangeSignUpPassword(event) {
    this.setState({
      signUpPassword: event.target.value,
    });
  }

  onTextboxChangeSignUpFirstName(event) {
    this.setState({
      signUpFirstName: event.target.value,
    });
  }

  onTextboxChangeSignUpLastName(event) {
    this.setState({
      signUpLastName: event.target.value,
    });
  }

  onSignUp(event) {
    event.preventDefault()
    //Grab State
    const {
      signUpFirstName,
      signUpLastName,
      signUpEmail,
      signUpPassword,
    } = this.setState

    this.setState({
      isLoading: true,
    })
    //Post req to backend
    fetch('http://localhost:3001/api/account/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: signUpFirstName,
        lastName: signUpLastName,
        email: signUpEmail,
        password: signUpPassword
      })
    })
      .then(res => res.json())
      .then(json => {
        if (json.sucess) {
          this.setState({
            signUpError: json.message,
            isLoading: false,
            signUpFirstName: '',
            signUpLastName: '',
            signUpEmail: '',
            signUpPassword: '',
          });
        } else {
          this.setState({
            signUpError: json.message,
            isLoading: false,
          });
        }
      });
  }

  onSignIn(event) {
    event.preventDefault()
    const {
      signInEmail,
      signInPassword,
    } = this.setState

    this.setState({
      isLoading: true,
    })
    //Post req to backend
    fetch('/api/account/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword
      })
    })
      .then(res => res.json())
      .then(json => {
        if (json.sucess) {
          setInStorage('the_main_app', { token: json.token });
          this.setState({
            signInError: json.message,
            isLoading: false,
            signInPassword: '',
            signInEmail: '',
            token: json.token
          });
        } else {
          this.setState({
            signInError: json.message,
            isLoading: false,
          });
        }
      });
  }

  logout(event) {
    event.preventDefault()
    this.setState({
      isLoading: true,
    });
    const obj = getFromStorage('the_main_app');
    if (obj && obj.token) {
      const { token } = obj;
      // Verify token
      fetch('/api/account/logout?token=' + token)
        .then(res => res.json())
        .then(json => {
          if(json.sucess) {
            this.setState({
              token: '',
              isLoading: false
            })
          } else {
            this.setState({
              isLoading: false,
            })
          }
        });
    } else {
      this.setState({
        isLoading: false,
      });
    }
  }

  render() {
    const {
      isLoading,
      token,
      signInError,
      signInEmail,
      signInPassword,
      signUpFirstName,
      signUpLastName,
      signUpEmail,
      signUpPassword,
      signUpError,
    } = this.state;

    if (isLoading) {
      return (<div><Nav /><p>Loading...</p></div>);
    }

    if (!token) {
      return (
        <div>
          <Nav />
          <div className="row">
            {
              (signInError) ? (
                <p>{signInError}</p>
              ) : (null)
            }
              <p>Sign In</p>
              <form className="col s12">

                <div className="row">

                  <div className="input-field col s6">
                    <input 
                      type="email" 
                      placeholder="Email" 
                      value={signInEmail} 
                      onChange={this.onTextboxChangeSignInEmail}
                      className="validate"
                      id="email"
                    />

                    <input 
                      type="password" 
                      placeholder="Password" 
                      value={signInPassword} 
                      onChange={this.onTextboxChangeSignInPassword}
                      className="validate"
                      id="password"
                    />
                  <button onClick={this.onSignIn}>Sign In</button>

                  </div>
                </div>
              </form>


          </div>
          <br />
          <br />
          <div>
          {
              (signUpError) ? (
                <p>{signUpError}</p>
              ) : (null)
            }
              <p>Sign Up</p>
              <input 
                type="text" 
                placeholder="First Name" 
                value={signUpFirstName}
                onChange={this.onTextboxChangeSignUpFirstName}
              /><br />
              <input 
                type="text" 
                placeholder="Last Name" 
                value={signUpLastName}
                onChange={this.onTextboxChangeSignUpLastName}
              /><br />
              <input 
                type="email" 
                placeholder="Email" 
                value={signUpEmail}
                onChange={this.onTextboxChangeSignUpEmail}
              /><br />
              <input 
                type="password" 
                placeholder="Password" 
                value={signUpPassword}
                onChange={this.onTextboxChangeSignUpPassword}
              /><br />
              <button onClick={this.onSignUp}>Sign Up</button>
          </div>

        </div>
      );
    }
    return (
        <div>
          <Nav />
            <h1>Hello World!</h1>
            <h5>This is the Login page.</h5>
            <p>Account</p>
            <button onClick={this.logout}>Logout</button>
        </div>

    );
  }
}

export default Login;
