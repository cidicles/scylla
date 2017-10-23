import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { lang } from '../../../il8n/lang';
import { connect } from 'react-redux';
import { changeUser } from '../../../Actions/Index';
import { apiBase } from '../../../const';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      username: '',
      password: '',
      status: ''
    };
  }
  sendAuth(){
    let _this = this;
    let feedUrl = `${apiBase}auth`;
    let { username, password } = this.state;
    fetch(feedUrl, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    .then(function(response) {
      return response.json();
    }).then(function(data) {
      if(data.error){
        _this.setState({
          status: data.errMessage
        });
      } else {
        _this.props.dispatch(changeUser(data));
        _this.setState({
          status: 'Login success'
        });
      }
    });
  }
  getStatus(err){
    let { status } = this.state;
    if(status){
      return(
        <div>{ status }</div>
      )
    }
  }
  handleUsernameChange(e) {
    this.setState({
      username: e.target.value
    })
  }
  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    })
  }
  render() {
    return (
      <div className="login">
        <Helmet title={ lang.login.title + lang.helmet.siteTitle } />
        <h1>{lang.login.title}</h1>
        <form>
          <fieldset>
            <h3>{lang.login.username}</h3>
            <input type="text" tabIndex="0" name="username"
              value={this.state.username}
              onChange={this.handleUsernameChange.bind(this)}
              />
          </fieldset>
          <fieldset>
            <h3>{lang.login.password}</h3>
            <input type="password" tabIndex="1" name="password"
              value={this.state.password}
              onChange={this.handlePasswordChange.bind(this)}
              />
          </fieldset>
        </form>
        <input onClick={() => { this.sendAuth() }} type="button" tabIndex="2" value={lang.login.submit} />
        { this.getStatus() }
      </div>
    );
  }
}

function mapStateToProps(state) {
  let { lang } = state;
  return {
    lang
  };
}

export default connect(mapStateToProps)(Login);
