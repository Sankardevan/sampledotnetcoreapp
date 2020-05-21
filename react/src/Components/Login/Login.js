import React,{Component} from 'react';
import logincss from '../Login/Login.css';
import googlelogo from '../../Assets/google.png'
import microsoftlogo from '../../Assets/Microsoft.svg'
class Login extends Component{
    constructor(props)
    {
        super();
        //console.log(props);
    }
    signinbutton = () => {
        this.props.callback();
     }
    render(){
        return(
            <div className={logincss.loginBbox}>
            <div className={logincss.loginLogo}>
            <span style={{fontSize:'4.6em ',letterSpacing:'-2px',textAlign:'center',paddingLeft:'2px',fontFamily:'Biome'}}>lo<span style={{color:'crimson'}}>g</span>ics </span> <sub style={{fontSize:'1.0em'}}>Client Portal</sub>

            </div>
            <div style={{marginTop:'10px'}}>
                    <a href="https://portal.logics.kitchen/sandbox/Accounts/GoogleLogin" className={logincss.googlebutton}>
                        <img src={googlelogo} alt='googleauth' className={logincss.anchorbutton} id="LoginButton" />
                        <span>Log in with Google</span>
                    </a>
                                <a href="https://portal.logics.kitchen/sandbox/Accounts/MicrosoftLogin" className={logincss.microsoftbutton}>
                        <img src={microsoftlogo} alt='microsoftauth' className={logincss.anchorbutton} id="LoginButton" />
                        <span>Log in with Microsoft</span>
                    </a>
           </div>

        <div className='login-box-body loginframe'>
<div className="form-group has-feedback">
                    <input className="form-control" id="username" name="username" placeholder="Email" type="text" />
                    <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                </div>
                <div className="form-group has-feedback">
                    <input className="form-control" id="userpassword" name="userpassword" placeholder="Password" type="password" />
                    <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                </div>
                <div className="form-group has-feedback">
                    <div>
                        <button type="submit" className="btn btn-primary btn-block btn-flat" onClick={() => this.signinbutton()}>Sign In</button>
                    </div>
                </div>
                <div className="checkbox col-md-6" style={{paddingLeft: '0', marginTop: '0'}}>
                    <label>
                        <input type="checkbox"/> Remember Me
                    </label>
                </div>
                <div className="col-md-6 forgetpassword">
                    <a href="/sandbox/Accounts/forgotpassword" style={{float:'right'}}>Forgot Password?</a>
                </div>
        </div>
        </div>
        );
    }
}

export default Login;