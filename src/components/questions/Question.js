import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false)

  function handleClick() {
    setShowInfo(!showInfo)
  }
  return (
    <div>
      <header>
        <h4>{title}</h4>
      </header>
      <article>
        <button onClick={handleClick}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
        {showInfo && <p>{info}</p>}
      </article>
    </div>
  )
}

export default Question;