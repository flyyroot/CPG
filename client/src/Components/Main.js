import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import pic1 from '../youssef-naddam-iJ2IG8ckCpA-unsplash.jpg'
function Stories(){
    return(      
        <div className="card">
            <div className='card-body'>
                    <div className='kategori'> <span>Kategori</span></div>
                    <div className='keterangan'>
                        <h4>Tukang Kebun</h4>
                        <p>lorem ipsum color de amet color de colrejdu 
                        ttrurejuwe ipokuytu</p>
                        <div className='btn'>  <a href="" className='btn'>Read More</a></div>
                    </div>
            </div>
        </div>
    )
}

export default class Main extends Component {
    constructor(props) {
      super(props)
      this.state = {
         submit:'',
         isi:''
      }
      this.handleInput = this.handleInput.bind(this);   
      this.handleSubmit = this.handleSubmit.bind(this)   
    }
    WriteStories(){
        return(
            <div className="wStory">
                <div className="desc">
                    <h3>Do you have your own inspiration stories and wanna join with us?</h3>
                    <p>To write your own stories, you have to join the news letter
                    I write monthly emails full of real-world web development tips and resources.
                    No spam, unsubscribe at any time</p>
                </div>
                <form  className="write">
                    <input className="cari" name="keyword" />
                    <button>Subscribe</button>
                </form>
            </div>
        )
    }
    handleInput(event){
        this.setState({
            isi : event.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault();
        this.setState({
            submit: this.target.value
        })
    }
    render() {
        return (
            <div>            
                <main>
                    <form  className="Cari" onSubmit={this.state.submit}>
                        <input className="cari" name="keyword" value={this.state.isi} onChange={this.handleInput} placeholder="Masukkan kata kunci"/>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='cri'/>
                    </form>
                    <div className='insp'>
                        <h3>Kisah Inspirasi</h3>
                        <div className="gridx">
                        <Stories/>
                        <Stories/>
                        <Stories/>
                        </div>
                    </div>
                    <this.WriteStories/>
                </main>
            </div>
        )
    }
}
