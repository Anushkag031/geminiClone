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
            <div className="main-bottom">
               <div className="search-box">
                     <input type="text" placeholder="Search for anything"/>
                     <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                     </div>
               </div>
               <p className="bottom-info">
                     <span> Tip: </span> You can ask me anything about Javascript.
               </p>
            </div>
        </div>
    </div>
  )
}

export default Main
