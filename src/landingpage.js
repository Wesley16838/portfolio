import React, {Component} from 'react';
import Header from './header'
import Professional from './professional'
import Academic from './academic'

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
        <Header/>
        <Professional/>
        <Academic/>
      </div>
       
      

    )
  }
}

export default Landingpage;