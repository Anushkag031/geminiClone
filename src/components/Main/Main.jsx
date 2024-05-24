import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon}/>
        </div>

        <div className="main-container">
            <div className="greet">
                <p><span>Hello , Developers !</span></p>
                <p> How can i help you today ?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest some Javascript interview Questions.</p>
                    <img src={assets.bulb_icon}/>
                </div>
                <div className="card">
                    <p>Explain Promises in Javascript.</p>
                    <img src={assets.bulb_icon}/>
                </div>
                <div className="card">
                    <p>add two numbers in Javascript code.</p>
                    <img src={assets.code_icon}/>
                </div>
                <div className="card">
                    <p>how to add button in Javascript.</p>
                    <img src={assets.code_icon}/>
                </div>
            </div>
        </div>

      
    </div>
  )
}

export default Main
