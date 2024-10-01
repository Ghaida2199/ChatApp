import React from 'react'
import { Link } from 'react-router-dom';
function Login() {
  return (




    
    <div className='flex flex-col justify-center items-center w-[100%] m-10  '>


<div className="mockup-phone">
  <div className="camera"></div>
  <div className="display">
    <div className="artboard artboard-demo phone-1">
    
    
      <img className='w-[100%] h-[40vh]' src="https://cdn.icon-icons.com/icons2/2076/PNG/512/chat_communication_message_talk_icon_127217.png" alt="" />
      <div className=' flex flex-col w-[80%] h-auto text-center'>
      <h1 className='font-serif font-bold text-2xl pt-4 h-[10vh]'>Welcome to Chatty</h1>
      <p className='font-serif h-[10vh] flex items-center justify-center  text-xl '>Chat with your friends, share phoro and video files fast with high quality.</p>
      <button className='bg-[#f0c4db] rounded mt-4 p-4 font-serif text-xl'><Link to="/Name">Start Chat</Link></button>
      </div>
    
    
    </div>
  </div>
</div>

    </div>
  )
}

export default Login
