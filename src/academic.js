import React, {Component} from 'react';
import Academicpart from './academic_part'

class Academic extends Component {
  constructor(props){
    super(props);
    
    this.state = {
     
    }
    
  }
 
  render() {
    return(
      <div className='academic'>
        <h1>Academic Projects</h1>
        <Academicpart title='PriCov' intro='' school='' location='' date='' image='' content='' git='' url='' front='' back='' mining=''/>
        <Academicpart title='Wonderful Bookstore' intro='' school='' location='' date='' image='' content='' git='' url='' front='' back='' mining=''/>
        <Academicpart title='Wesley Bookstore' intro='' school='' location='' date='' image='' content='' git='' url='' front='' back='' mining=''/>
        <Academicpart title='Travel Guide' intro='' school='' location='' date='' image='' content='' git='' url='' front='' back='' mining=''/>
        <Academicpart title='VATM' intro='' school='' location='' date='' image='' content='' git='' url='' front='' back='' mining=''/>

      </div>

    )
  }
}

export default Academic;