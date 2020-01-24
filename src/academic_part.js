import React, {Component} from 'react';
import link from './Assets/img/link2x.png'
import git from './Assets/img/git2x.png'

class Academicpart extends Component {
  constructor(props){
    super(props);
    
    this.state = {
     title:this.props.title,
     intro:this.props.intro,
     school:this.props.school,
     location:this.props.location,
     date:this.props.date,
     image:this.props.image,
     content:this.props.content,
     git:this.props.git,
     url:this.props.url,
     front:this.props.front,
     back:this.props.back,
     mining:this.props.mining
    }
    
  }
 
  render() {
    let mine;
    let back;
    let url;
    if(this.state.url !== ''){
        url  =  <a href={this.state.url} target='_blank' rel="noopener noreferrer">
        <img alt='external_url' src={link}/>
    </a>
    }
    if(this.state.mining !== ''){
        mine = <p data-aos="fade-in" data-aos-duration="500" data-aos-delay="500">Data mining : {this.state.mining}</p>
    }
    if(this.state.back !== ''){
        back = <p data-aos="fade-in" data-aos-duration="500" data-aos-delay="500">Back-end : {this.state.back}</p>
    }
    return(
      <div data-aos="fade-in" className="academic-part">
        <h1 className="aca-title">{this.state.title}</h1>
        <div className="school-detail">
            <p>{this.state.school}, {this.state.location}</p>
            <p>{this.state.date}</p>
        </div>
        <p >{this.state.intro}</p>
       
        <div data-aos="fade-up"  data-aos-delay="500"  className='aca-image'>
            {
                this.state.image.map((item,i)=>{
                    if(item === '/static/media/ios2x.57d594e7.png' || item === '/static/media/vatm2x.5ad401cd.png'){
                        return <img className="image-aca-mobile" key={i} alt={item} src={item}/>
                    }else{
                        return <img className="image-aca" key={i} alt={item} src={item}/>
                    }
                    
                })
            }
           
        </div>
        <p>{this.state.content}</p>
        <p>Front-end : {this.state.front}</p>
        {back}
        {mine}
        <div className='aca-link'>
           {url}
            <a href={this.state.git} target='_blank' rel="noopener noreferrer">
                <img alt='git' src={git}/>
            </a>
        </div>
      </div>
    )
  }
}

export default Academicpart;