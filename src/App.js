import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import MetaTags from 'react-meta-tags';
//includes
import './Assets/css/styles.min.css'//css file
import './Assets/js/scripts.min.js'//js file

import Landingpage from './landingpage';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      loading:true,
   
    };
  }
  //
  componentDidMount() {
    this.setState({loading: false})
}
  render() {
    
    const { loading } = this.state;

    if (loading) {
      return <div className="loading">
    <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66">
      <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
    </svg>
        </div>
    }
    return(
     
      <Router>
         <div className="App">
         <MetaTags>
            <title>Portfolio</title>
            <meta name="description" content="Wesley Portfolio" />
            <meta property="og:title" content="Portfolio" />
            <meta property="og:image" content="landing.png" />
         </MetaTags>
          <Switch>
            <Route exact path="/" render={(props) => <Landingpage {...props} title="Portfolio"/>}/>
            
          </Switch>
     
      </div>
      </Router>    
      
    )
  }
}

export default App;