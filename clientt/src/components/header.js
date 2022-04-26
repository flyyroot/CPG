import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, useState } from 'react';
import { faBars} from '@fortawesome/free-solid-svg-icons';
function Headers(){
    const [bar,setBar] =useState({
        display:false,
        title:"DBE"
    })
    if(bar.display===false){
    return(
    <>
   <nav>
       <h3>Dreambe</h3>
       <ul>
           <li>Inspiration</li>
           <li>Find Offline Community</li>
           <li>Find Partner</li>
           <li>Find Mentor</li>
       </ul>
       <h4><FontAwesomeIcon icon={['fa','fa-bars']} /></h4>
       <FontAwesomeIcon icon={faBars} className='bars' onClick={()=>setBar({display:true})}/>
   </nav>
    </>
    )
    }
    else{
        return(
        <>
        <nav>
            <h3>Dreambe</h3>
            <ul class="bar-nav">
                <li>Inspiration</li>
                <li>Find Offline Community</li>
                <li>Find Partner</li>
                <li>Find Mentor</li>
            </ul>
            <h4><FontAwesomeIcon icon={['fa','fa-bars']} /></h4>
            <FontAwesomeIcon icon={faBars} className='bars' onClick={()=>setBar({display:false})}/>
        </nav>
         </>
         )
         }
    }

export default class Header extends Component {
    render() {
    return (
      <div> <Headers/> </div>
    );
  }
}




