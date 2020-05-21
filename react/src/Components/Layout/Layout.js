import React,{Component} from 'react';
import Login from '../Login/Login'
import logo from '../../Assets/logo192.png'
import Header from '../Toolbar/ToolBar'
let clientlogo = {logo}; 
class Layout extends Component{
    constructor(props) {
        super();       
      }
    render(){
        return(
            <div>
                <Login logo={clientlogo} callback={this.props.callback}/>
            </div>
        );
    }
}

export default Layout;

class MainLayout extends Component{
    render(){
        return(
            <div>
                <Header/>
            </div>
        );
    }
}

export {MainLayout};