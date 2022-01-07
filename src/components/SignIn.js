import React, { Component } from 'react'
import {
  TextField,
  Button,
  Container
} from '@material-ui/core'



class SignIn extends Component {
  constructor(props) {
    super(props)

    console.log('props in sign in' , props)

    this.state = {
      username: '',
      password: ''
    }
  }

  handleTextChange = (e) => {
    const state = { ...this.state }
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  login = (e) => {
    e.preventDefault()
    const payload = { ...this.state }
    payload.id = this.props.user.length + 1
    delete payload.open
    // console.log('THE USER payload: ', payload)
    // console.log('this.state.username: ', this.state.username)
    // console.log('this.state.password: ', this.state.password)
    document.cookie = "loggedIn=true;max-age=1000"
    this.props.logInUser(payload)
    // console.log('logInUser function: ', logInUser)
   
    // window.location.replace("/")
    console.log('this pops: ', this.props)
    this.props.history.push('/')
  }
  
  render() {
    return (
      <div className="App">
        <Container maxWidth="sm">
          <form className="login-form" onSubmit={this.login}>
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.username}
              name="username"
              label="Username"
              type="text" />
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.password}
              name="password"
              label="Password"
              type="password" />
            <Button
              type="submit"
              className="login-button"
              variant="contained"
              color="primary">Login</Button>
          </form>
        </Container>
      </div>
    );
  }
}

export default SignIn;
