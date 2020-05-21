import React, { Component } from 'react';

class Login extends Component{
    render(){
        return(
        <header>
            <img src={this.props.logo.logo} alt='logo'/>
        </header>
        );
    }
}

export  default Login