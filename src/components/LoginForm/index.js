// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', loginStatus: true}

  onChangeUsername = event => this.setState({username: event.target.value})

  onChangePassword = event => this.setState({password: event.target.value})

  onLoginSuccess = () => {
    const {history} = this.props
    history.replace('/')
    this.setState({loginStatus: true})
  }

  onLoginFailure = () => {
    this.setState({loginStatus: false})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onLoginSuccess()
    } else {
      this.onLoginFailure()
    }
    console.log(response)
  }

  renderUsername = () => {
    const {username} = this.state
    return (
      <div className="user-password-container">
        <label className="username-password-label" htmlFor="username">
          USERNAME
        </label>
        <input
          id="username"
          type="text"
          className="username-password-input-element"
          placeholder="Username"
          value={username}
          onChange={this.onChangeUsername}
        />
      </div>
    )
  }

  renderPassword = () => {
    const {password} = this.state
    return (
      <div className="user-password-container">
        <label className="username-password-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          id="password"
          type="password"
          className="username-password-input-element"
          placeholder="Password"
          value={password}
          onChange={this.onChangePassword}
        />
      </div>
    )
  }

  render() {
    const {loginStatus, username, password} = this.state
    let errMsg
    if (loginStatus === false) {
      if (username === '' && password === '') {
        errMsg = 'Enter Username and Password'
      } else if (username === '') {
        errMsg = 'Enter Username'
      } else if (password === '') {
        errMsg = 'Enter Password'
      } else {
        errMsg = "*Username and Password didn't match"
      }
    }
    return (
      <div className="login-bg-container">
        <div className="form-bg-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-image"
          />
          <form className="login-form" onSubmit={this.onSubmitForm}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="trendz-logo"
            />
            <div>{this.renderUsername()}</div>
            <div>{this.renderPassword()}</div>
            <button type="submit" className="login-button">
              Login
            </button>
            <p className="invalid-login">{errMsg}</p>
          </form>
        </div>
      </div>
    )
  }
}
export default LoginForm
