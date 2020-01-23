import React, {Component} from 'react';
import ProfessionalPart from './professional_part'
import advantech from './Assets/img/advantech2x.png'
import creatop from './Assets/img/creatop_lg@2x.png'
import dct from './Assets/img/dct2x.png'
import ispts from './Assets/img/ispts2x.png'
import cannasphere from './Assets/img/cannasphere2x.png'
class Professional extends Component {
  constructor(props){
    super(props);
    
    this.state = {
     
    }
    
  }
 
  render() {
    return(
      <div className="professional">
          <h1 data-aos="fade-in">Professional Projects</h1>
          <div className="professional-section">
            <ProfessionalPart title="Water Treatment 
  Management Dashboard" position="Front-End Developer Intern" company="Advantech" location="Taipei, Taiwan" date="July 2019 - Aug 2019" image={advantech} url="https://dashboard-adviiot-ene-showcasemplus.wise-paas.com/frame/default?orgId=5&language=en&theme=dark&refresh=5s" first="Developed user-friendly panels with platform Grafana to visualize data using 
  AngularJS and SVG.js" second="Cooperated with front-end team to Improved visualizing time-series data for 
  infrastructure and application analytics"/>
            <ProfessionalPart title="Bosswell &amp; HsuanFu Wood" company="Creatop" position="Front-End Developer Intern" location="Taichung, Taiwan" date="June 2019 - July 2018" image={creatop} url="http://www.hsuanfu.com.tw/en/" first="Redesigned and developped one page for air purifier company and customized a whole responsive web design using SCSS and Bootstrap for Furniture 
          company to increase brand and outreach." second=" Collaborated with UI designer and Back-End developer to coordinate visual 
          and database designs"/>
           <ProfessionalPart title="DCT" company="Brilltek" position="Full Stack Developer Intern" location="Taichung, Taiwan" date="May 2019 - Aug 2019" image={dct} url="" first="Built a serverless Rest API with firebase cloud function,Express.js and Cloud 
    Firestore for mobile app" second="Cooperated with front-end team to create innovative mobile app interface and 
    features using Flutter and Dart"/>
            <ProfessionalPart title="CannaSphere" company="CannaSphere.org and The Cannabis Fair Trade 
          Organization" position="Jr. Front-End Dev, UI/UX Redesign Team Intern" location="Seattle, WA" date="Feb 2018 - Apr 2018" image={cannasphere} url="http://cannasphere.org/" first="Redesigned the web page layout using Adobe XD and implemented Responsive
              Web Design using Bootstrap" second="Held daily scrum meeting with the redesign team to achieve agile development"/>
           
           
            <ProfessionalPart title="ISPTS 2019" company="Stevens Institute of Technology" position="Part-time Web Developer" location="Hoboken, NJ" date="Mar 2019 - June 2019" image={ispts} url="https://web.stevens.edu/ispts/index" first="Redesign the web page and translate wireframe to actual code with HTML, CSS
    ,Javascript and PHP" second=""/>
            
          </div>
      </div>
       
      

    )
  }
}

export default Professional;