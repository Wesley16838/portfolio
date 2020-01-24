import React, {Component} from 'react';
import Academicpart from './academic_part'
import pricov from './Assets/img/pricov2x.png'
import responsive from './Assets/img/responsive2x.png'
import ios from './Assets/img/ios2x.png'
import bookstore from './Assets/img/bookstore2x.png'
import tokyo from './Assets/img/tokyo2x.png'
import vatm from './Assets/img/vatm2x.png'
class Academic extends Component {
  constructor(props){
    super(props);
    
    this.state = {
     
    }
    
  }
 
  render() {
    return(
      <div className='academic'>
        <h1 data-aos="fade-in">Academic Projects</h1>
        <div className="academic-section">
        <Academicpart title='PriCov' intro='Data Visualization Price Comparison Website' school='Stevens Institute of Technology' location='Hoboken, NJ' date='Fall 2019' image={[pricov]} content='Allows users to search products from eBay and Amazon using data 
mining and visualizing  data as different charts' git='https://github.com/Wesley16838/PriCov' url='https://pricovfrontend.herokuapp.com/
' front='React.js/ Apollo/ SCSS/ Gulp/ d3.js' back='GraphQL/ MongoDB/ Atlas/ Heroku/ Firebase' mining='Python/ Selenium'/>
        <Academicpart title='Walker Bookstore' intro='A RWD online bookstore - iOS App &amp; Web' school='Stevens Institute of Technology' location='Hoboken, NJ' date='Spring 2019' image={[responsive,ios]} content='Features includes sign up, log in, Cart(add,
 remove, update and place order), Search 
books and display books in the page. This 
project cover security using JWT to 
authorize user’s information. Amazing 
design and perfect error handle.' git='https://github.com/Wesley16838/Online-Bookstore' url='https://bookstore-cs546.appspot.com/
' front='Handlebars/ HTML/ CSS' back='RESTful API/ Express/ MongoDB/ Atlas/ JWT' mining=''/>
        <Academicpart title='Wesley Bookstore' intro='The bookstore iusing PHP implement basic features of online bookstore' school='Highline community college' location='Des Moines, WA' date='Winter 2018' image={[bookstore]} content='The bookstore is an academic project.  Using PHP connect to the 
MySQL database phpmyadmin to implement basic features include 
show book’s detail in the page, user sign up, login, add and remove 
item to/ from the Cart. ' git='https://github.com/Wesley16838/Bookstore_PHP' url='http://weihsuanwong.com/Wesley_Bookstore/homepage/landingpage.php' front='HTML/CSS/Javascript/Bootstrap' back='PHP / SQL / phpMyAdmin' mining=''/>
        <Academicpart title='Travel Guide' intro='A RWD static website with brief introduction about the Tokyo' school='Highline community college ' location='Des Moines' date=' Fall 2017' image={[tokyo]} content='Implemented RWD with pure CSS. A static webpage deployed in 
godaddy. Introduction of some famous tourist attractions in Tokyo
And how to preparefor trip.' git='https://github.com/Wesley16838/Travel_Guide' url='http://weihsuanwong.com/Travel_Guide/index.php' front='HTML/ CSS/ Javascript' back='' mining=''/>
        <Academicpart title='VATM' intro='Allows people to remotely retrieve ordered cash unlike a traditional ATM' school='Highline community college' location='Des Moines' date='Spring 2018' image={[vatm]} content='Vatm is going to save users time to get the cash back. Users order some food by using app and link to vatm when they check out. Users can choose the amount of cash back they prefer. Cash back will be delivered with food then.' git='https://github.com/Wesley16838/android_vatm' url='' front='Android Studio/ JAVA/ XML' back='Node.js/ RESTful API/ SQL/ phpMyAdmin' mining=''/>

        </div>

      </div>

    )
  }
}

export default Academic;