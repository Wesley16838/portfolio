import React, {Component} from 'react';
import ProfessionalPart from './professional_part'
import advantech from './Assets/img/advantech2x.png'
class Professional extends Component {
  constructor(props){
    super(props);
    
    this.state = {
     
    }
    
  }
 
  render() {
    return(
      <div>
         <ProfessionalPart title="" position="" date="" image={advantech} url="" first="" second=""/>
         <ProfessionalPart title="" position="" date="" image={advantech} url="" first="" second=""/>
         <ProfessionalPart title="" position="" date="" image={advantech} url="" first="" second=""/>
         <ProfessionalPart title="" position="" date="" image={advantech} url="" first="" second=""/>
      </div>
       
      

    )
  }
}

export default Professional;