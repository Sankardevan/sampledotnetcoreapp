import React from 'react';
import Layout,{MainLayout} from './Components/Layout/Layout';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
         isAuth:false
    };
  }
  myCallback = () => {
    this.setState({isAuth: true});
    
  }
  render(){
  return (
    <div>
       {!this.state.isAuth && <Layout callback={this.myCallback}/>}
       {this.state.isAuth && <MainLayout/>}
    </div>
    );
  }
}

export default App;
