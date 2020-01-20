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
      <div className='professional-part'>
         <span>
           <a href={this.state.url} target="_blank">
           {
           this.state.url.map(item=>{
             if(item == ''){
              
             }else{
              return(
                <img src={url} />
             )
             }
            
           })
         }
             
           </a>
         </span>
         <h1>{this.state.title}</h1>
         <h3>{this.state.position}</h3>
         <div className="company-detail">
          <h3>{this.state.company}, {this.state.location}</h3>
          <h3>{this.state.date}</h3>
         </div>
         <ul>
         {
           this.state.content.map(item=>{
             if(item == ''){
              
             }else{
              return(
                <li key={item}>{item}</li>
             )
             }
            
           })
         }
         </ul>
        
         <div className="image">
           {
             this.state.image.map(item=>{
                if(item == "/static/media/dct2x.360e19e7.png"){
                  return(
                    <img key={item} className="works-mobile" src={this.state.image}/>
                  )
                }else{
                  return(
                    <img key={item} className="works" src={this.state.image}/>
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