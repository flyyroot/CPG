import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, useState } from 'react';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'

function Headers(){
    const [bar,setBar] =useState({
        display:false,
        title:"DBE"
    })
    if(bar.display===false){
    return(
    <nav>
       <h3>Dreambe</h3>
       <ul>
           <Link to="/inspirasi" className="linkk">
                <li>Inspiration</li>
           </Link>
           <Link to="/mentor"  className="linkk">
                <li>Find Mentor</li>
           </Link>
           <Link to="/community">
                <li>Find Offline Community</li>
           </Link>
            <Link to="/partner">
            <li>Find Partner</li>
            </Link>
       </ul>
       <h4><FontAwesomeIcon icon={['fa','fa-bars']} /></h4>
       <FontAwesomeIcon icon={faBars} className='bars' onClick={()=>setBar({display:true})}/>
   </nav>
  
    )
    }
    else{
        return(
   
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




