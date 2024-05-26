import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    loading,
    showResult,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} />
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello , Developers !</span>
              </p>
              <p> How can i help you today ?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest some Javascript interview Questions.</p>
                <img src={assets.bulb_icon} />
              </div>
              <div className="card">
                <p>Explain Promises in Javascript.</p>
                <img src={assets.bulb_icon} />
              </div>
              <div className="card">
                <p>add two numbers in Javascript code.</p>
                <img src={assets.code_icon} />
              </div>
              <div className="card">
                <p>how to add button in Javascript.</p>
                <img src={assets.code_icon} />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? ( //to show the loader
                <div className="loader"> 
                <div class="double-bounce1"></div>
                <div class="double-bounce2"></div>
                    
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p> //to show the result data in the html format
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)} //to get the input value
              value={input}
              type="text"
              placeholder="Search for anything"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {/* to show the send icon only when the input is not empty */}
              {input ?<img
                onClick={() => onSent(input)} //to send the input value
                src={assets.send_icon}
                alt=""
              />: null }
              
            </div>
          </div>
          <p className="bottom-info">
            <span> Tip: </span> You can ask me anything about Javascript.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
