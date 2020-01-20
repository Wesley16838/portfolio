import React, {Component} from 'react';

import logo from './Assets/img/logo2x.png'
import me from './Assets/img/me2x.png'
class Header extends Component {
  constructor(props){
    super(props);
    
    this.state = {
     
    }
    
  }
  
  render() {
    return(
      <div className="header">
          <div className="header-left">
            <div className="header-left-left">
                <div>
                    <img src={logo} className='logo' alt="Logo"/>
                </div>
                <div className="detail">
                    <p>Hello, I am</p>
                    <h1>WEI-HSUAN</h1>
                    <h1>WONG</h1>
                    <p>Web &amp; Mobile Developer</p>
                    <a href="https://github.com/Wesley16838/resume/blob/master/Resume2020.pdf" className="basicBtn">Resume</a>
                </div>
                <div className="welcome">
                    <p>Welcome to my</p>
                    <h1>
                        PORTFOLIO
                    </h1>
                </div>
            </div>
            
          </div>
          <div className="header-right">
              <div className="header-right-left">
                <p className="developer">DEVELOPER</p>        
              </div>
              <div>
                  <img src={me} className="me" alt="Me"/>
              </div>
              <div className="name">
               <div>
                  <p>W</p>
                  <p>E</p>
                  <p>S</p>
                  <p>L</p>
                  <p>E</p>
                  <p>Y</p>
               </div>
                 
              </div>
          </div>
      </div>
       
      

    )
  }
}

export default Header;