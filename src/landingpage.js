import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route,NavLink } from "react-router-dom"


class Landingpage extends Component {
  constructor(props){
    super(props);
    
    this.state = {
     
    }
    
  }
  componentDidMount() {
    document.title = this.props.title
  }
  render() {
    return(
      <div className="container">
        

      </div>
       
      

    )
  }
}

export default Landingpage;