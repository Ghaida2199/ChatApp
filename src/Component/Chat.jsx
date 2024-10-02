import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Chat() {
  const [chat1, setChat1] = useState("");
  const [chat2, setChat2] = useState("");
  const [messages, setMessages] = useState([]);

  const location = useLocation();
  const { username, username2 } = location.state || {};

  const sendMessage1 = () => {
    if (chat1.trim() !== "") {
      setMessages([...messages, { text: chat1, sender: username }]);
      setChat1("");
    }
  };

  const sendMessage2 = () => {
    if (chat2.trim() !== "") {
      setMessages([...messages, { text: chat2, sender: username2 }]);
      setChat2("");
    }
  };

  return (


    <div className='flex w-[90%] justify-center items-center m-10'>
      <div className="mockup-phone ">
  <div className="camera"></div>
  <div className="display ">
    
    <div className="artboard artboard-demo phone-1  ">

      <div className='flex flex-col  w-[100%]  '>
        <div className='flex flex-col  bg-[#fdecf5] h-[82vh] w-[100%] rounded-[20px] justify-end'>
          <div className='flex justify-between'>
            <h2 className='ml-3'>{username || "No username provided"}</h2>
            <h2 className='mr-5'><Link to="/Login">Log Out</Link></h2>
          </div>
          <div className='bg-[#efb6d5ab] flex flex-col rounded-t-[5vh] relative z-6 h-[79%] w-[94%] ml-2.5 overflow-y-auto'>
            {/* رسائل الدردشة */}
            {messages.map((message, index) => (
              <div className={`chat m-7 ${message.sender === username ? 'chat-start' : 'chat-end'}`} key={index}>
                <div className="chat-image avatar">
                  <div className=" rounded-full w-[6vh]">
                    <img 
                      alt="User avatar"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </div>
                <div className="chat-header">
                  {message.sender}
                  <time className="text-xs opacity-50">12:45</time>
                </div>
                <div className="chat-bubble bg-green-00 w-auto inline rounded text-white p-2">{message.text}</div>
                <div className="chat-footer opacity-50">Delivered</div>
              </div>
            ))}
          </div>

          <div className='flex items-center w-auto mb-2 mt-2 ml-4'>
            <textarea
              onChange={(e) => setChat1(e.target.value)}
              value={chat1}
              className='w-[30vh] h-[8vh]  rounded p-2 resize-none'
              placeholder="Type your message..."
            />
            <button onClick={sendMessage1} className='w-[12vh] h-[8vh] rounded-l text-white bg-[#b1b0b0]'>Send</button>
          </div>
        </div>
      </div>


    </div>
  </div>
</div>


<div className="mockup-phone">
  <div className="camera"></div>
  <div className="display">
    <div className="artboard artboard-demo phone-1">
    
    

      <div className='flex flex-col  w-[100%] '>
      <div className='flex flex-col  bg-[#fdecf5] h-[82vh] w-[100%] rounded-[20px] justify-end'>
          <div className='flex justify-between'>
            <h2 className='ml-3'>{username2 || "No username provided"}</h2>
            <h2 className='mr-5'><Link to="/Login">Log Out</Link></h2>
          </div>
          <div className='bg-[#efb6d5ab] flex flex-col rounded-t-[5vh] relative z-6 h-[79%] w-[94%] ml-2.5 overflow-y-auto'>
            {/* رسائل الدردشة */}
            {messages.map((message, index) => (
              <div className={`chat m-7 ${message.sender === username2 ? 'chat-start' : 'chat-end'}`} key={index}>
                <div className="chat-image avatar flex flex-row-reverse">
                  <div className="w-[6vh] rounded-full">
                    <img
                      alt="User avatar"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </div>
                <div className="chat-header flex flex-row-reverse">
                  {message.sender}
                  <time className="text-xs opacity-50">12:46</time>
                </div>
                <div className='flex flex-row-reverse'>
                  <div className="chat-bubble bg-green-00 w-auto inline rounded text-white p-2">{message.text}</div>
                </div>
                <div className="chat-footer opacity-50 flex flex-row-reverse">Seen at 12:46</div>
              </div>
            ))}
          </div>

          <div className='flex items-center w-auto mb-2 mt-2 ml-4'>
            <textarea
              onChange={(e) => setChat2(e.target.value)}
              value={chat2}
              className='w-[30vh] h-[8vh] rounded p-2 resize-none'
              placeholder="Type your message..."
            />
            <button onClick={sendMessage2} className='w-[12vh] h-[8vh] rounded-l text-white bg-[#b1b0b0]'>Send</button>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>



    </div>




  )
}

export default Chat;
