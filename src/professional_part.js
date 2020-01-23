import React, {Component} from 'react';
import url from './Assets/img/link2x.png'

class ProfessionalPart extends Component {
  constructor(props){
    super(props);
    
    this.state = {
        title : this.props.title,
        position : this.props.position,
        location : this.props.location,
        date : this.props.date,
        image : [this.props.image],
        url : [this.props.url],
        content:[this.props.first,this.props.second],
        company : this.props.company
    }
    
  }
 
  render() {
    
    return(
      <div data-aos="fade-in" data-aos-duration="1000" className='professional-part'>
         <span>
           <a href={this.state.url} target="_blank" rel="noopener noreferrer">
           {
           this.state.url.map((item,i)=>{
             if(item === ''){
              return (null)
             }else{
              return(
                <img key={i} alt='url' src={url} />
             )
             }
            
           })
         }
             
           </a>
         </span>
         <h1 data-aos="fade-in" data-aos-duration="500" data-aos-delay="500">{this.state.title}</h1>
         <p data-aos="fade-in" data-aos-duration="500" data-aos-delay="500">{this.state.position}</p>
         <div data-aos="fade-in" data-aos-duration="500" data-aos-delay="500" className="company-detail">
          <p>{this.state.company}, {this.state.location}</p>
          <p>{this.state.date}</p>
         </div>
         <ul data-aos="fade-in" data-aos-duration="500" data-aos-delay="500">
         {
           this.state.content.map((item,i)=>{
             if(item === ''){
              return (null)
             }else{
              return(
                <li key={i}>{item}</li>
             )
             }
            
           })
         }
         </ul>
        
         <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" className="image">
           {
             this.state.image.map((item,i)=>{
                if(item === "/static/media/dct2x.360e19e7.png"){
                  return(
                    <img alt='mobile' key={i} className="works-mobile" src={this.state.image}/>
                  )
                }else{
                  return(
                    <img alt='laptop' key={i} className="works" src={this.state.image}/>
                  )
                }
             }
             )
           }
           
         </div>
      </div>
       
      

    )
  }
}

export default ProfessionalPart;