import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Name2() {
  const [value2, setValue2] = useState("");
    const navigate = useNavigate();

  const handleClick2 = () => {
    const value = localStorage.getItem('username');
    if (!value2) {
      alert("Please enter your name!"); 
      navigate("/Name2");  
    } else {
      navigate("/Chat", { state: { username2: value2, username: value } });    }
  };

  const MyInput2 = (e) => {
    setValue2(e.target.value);
  };
  return (
    

    <div className='flex w-[100%] m-10'>

<div className="mockup-phone">
  <div className="camera"></div>
  <div className="display">
    <div className="artboard artboard-demo phone-1">
    
<div className='flex flex-col justify-center items-center w-[100%] '>
      <div className='flex  mt-3 flex-col w-[100%] justify-center items-center text-center bg-[#f0c4db] h-[90vh]'>
        <img className='w-[50%]' src="https://cdn-icons-png.flaticon.com/512/7827/7827960.png" alt="" />
        <label className='font-sans text-3xl p-6 rounded'>Your Name2:</label>
        <input
          onChange={MyInput2}
          className='w-[40vh] p-2 m-4'
          placeholder='Ex: Ahmed'
          type="text"
          value={value2}
        />
        <button
          onClick={handleClick2}  
          className='font-serif text-xl border w-[20vh] bg-[#e9e4e4] rounded-xl'>
          Start
        </button>
      </div>
    </div>


    
    </div>
  </div>
</div>

      
    </div>
  )
}

export default Name2
