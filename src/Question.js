import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  function HandleClick()
  {
    setShowInfo(!showInfo);
  }
  return <article className='question'>
    <header>
      <h4>{props.title}</h4>
      <button className='btn' onClick={HandleClick}>
      {showInfo? <AiOutlineMinus /> : <AiOutlinePlus/>}
      </button>
    </header>
   {showInfo &&  <p>{props.info}</p>}
  </article>;
};

export default Question;
