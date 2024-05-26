import React, { useContext } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = React.useState(false);

  const { onSent, setRecentPrompt, recentPrompt, previousPrompt, input, setInput } = useContext(Context);

  return (
    <div className="sidebar">
      {/*topbar*/}
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)} // toggle extended state, when clicked on menu icon button (default is false) 
          className="menu"
          src={assets.menu_icon}
          alt="menu_icon"
        />
        <div className="new-chat">
          <img src={assets.plus_icon} />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? ( // usestate used, hide items when extended is false
          <div className="recent">
            <p className="recent-title">Recent </p>
            {previousPrompt.map((item,index)=> {
              return (
                <div className="recent-entry" key={index}>
                  <img src={assets.message_icon} alt="message_icon" />
                  <p>{item.slice(0,18)}...</p>
                </div>
              );
            })}
            
          </div>
        ) : null}
      </div>
      <div className="bottom">
        
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="question_icon" />
          {extended ? <p>Help</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="history_icon" />
          {extended ? <p>Activity</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="setting_icon" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>

  );
};


export default Sidebar;
