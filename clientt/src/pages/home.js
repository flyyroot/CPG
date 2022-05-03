import image from '../components/images'
import React, { Component } from 'react'
import {useNavigate} from "react-router-dom"

function Home1() {
    const auths = useNavigate()
    return (
          <section className='sh'>
              <div className="sub-sh1">
                  <img src={image.mpic} alt=""/>
              </div>
              <div className="sub-sh2">
                  <h1>Build Dreams</h1>
                  <p>We are non profit organization to help people who have desire to make something happen
                      because nothing is impossible!
                  </p>
                  <button onClick={()=>auths("/auth")}>Join with us!</button>
              </div>
          </section>
    )
  }

function Service(){
    return(
        <section className='sv'>
            <div className='svd'>
                <h1>What is our vision?</h1>
                <p>We make people to have hope and to make people happy and concious about their live.
                    Cause we ae here a family
                </p>
            </div>
            <div className='svi'>
                <div className="svi-1">
                    <div className="svi-isi">
                    <img src={image.tgt} alt=""/>
                        <h3>Escord</h3>
                      
                        <p>
                            Accompanying you
                            even if you don't know where to start 
                        </p>
                    </div>
                    <div className="svi-isi">
                    <img src={image.inter} alt=""/>
                        <h3>Build Goals</h3>
                        <p>
                          Know your value and passion, and craete it into something
                        </p>
                    </div>
                    <div className="svi-isi">
                    <img src={image.mon} alt=""/>
                        <h3>Monitoring</h3>
                        <p>
                        One of our services. To keep you know where to start and how its going.
                        You can ask help to monitoring by our people.
                        </p>
                    </div>
                </div>
            </div>
           
        </section>
    )
}
function Step(){
    return(
        <section className='st'>
            <div className='st1'>
                <ul>
                    <li>Explore Fields</li>
                    <li>See Community</li>
                    <li>Carrer Path</li>
                    <li>People's Dreams</li>
                </ul>
            </div>
            <div className='st2'>
                <div className='sub-st2'>
                    There are many fields you can explore and choose your passion
                </div>
                <div className='sub-st2'>
                    There are communities around the world you can joining them and get new insights
                </div>
                <div className='sub-st2'>
                    We combining every carrer and you can choose your own and tell us to ask for Monitoring
                </div>
                <div className='sub-st2'>
                    Here is many people's dreams. You can explore then and tell how theirs dream become true
                </div>
            </div>
        </section>
    )
}
function Inspirations(){
    return(
    <section className='si'>
       <h1>Hero's Stories</h1> 
       <p>Hero is someone who gives of himself, often putting his own life at great risk, for the greater good of others</p>
       <p>See their stories and get inspiration from the</p>
       <button> See </button>
    </section>
    )
}

// function Connect(){
//     return(
//         <section className='connected'>
            
//         </section>
//     )
// }

export default class Home extends Component {
    render() {
        return (
            <div>
                <Home1/>
                <Service/>
                <Step/>
                <Inspirations/>
            </div>
        )
    }
}


