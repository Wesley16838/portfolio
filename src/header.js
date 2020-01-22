import React, {Component} from 'react';

import logo from './Assets/img/logo2x.png'
import me from './Assets/img/me_xxxl@2x.png'
import me2 from './Assets/img/me_xxl@2x.png'
import me3 from './Assets/img/me_xl@2x.png'
class Header extends Component {
  constructor(props){
    super(props);
    
    this.state = {
     
    }
    
  }
  
  render() {
    return(
      <div className="header">
          <div className="header-left" data-aos="fade-in"  data-aos-duration="1000">
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
              <div data-aos="fade-right" data-aos-delay="1000" className="header-right-left">
                <p className="developer">DEVELOPER</p>        
              </div>
              <div data-aos="fade-in" data-aos-delay="500" data-aos-duration="1000">
                  {/* <img src={me} /> */}
                  <picture>
                  
                   
                    <source 
                      media="(min-width: 1199px) and (max-width: 1479px)" 
                      className="me" 
                      
                      srcSet={me3}/>
                    <source 
                      media="(min-width: 1480px) and (max-width: 1679px)" 
                      className="me" 
                     
                      srcSet={me2}/>
                    <source 
                      media="(min-width: 1680px)" 
                      className="me" 
                     
                      srcSet={me}/>
                    <img 
                      src={me}
                      srcSet={me}
                      className="me" 
                      alt="Me"/>
                  </picture>
              </div>
              <div  data-aos="fade-left" data-aos-delay="1000" className="name">
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