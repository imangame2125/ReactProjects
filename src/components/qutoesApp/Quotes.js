import React, { useEffect, useReducer, useState } from "react";
import { getItem } from "./GetListDataServer";

function reducer(state, action) {
  // console.log(state,action);
  switch (action.type) {
    case 'GET_NAME_GET_QUOTES':
      return {
        ...state,
        name: action.payload.name,
        quoet: action.payload.quoet
      }
  }
  return state

}
export default function Quotes({ id, onBackClick }) {
  // const [name, setName] = useState('');
  // const [quoet, setQuoet] = useState('');
  const [{ name, quoet }, dispatch] = useReducer(reducer, {
    name: '',
    quoet: ''
  })


  function handleBack() {
    onBackClick()
  }
  useEffect(() => {

    getItem(id)
      .then((data) => {
        //  setName(data.name);
        //  setQuoet(data.quotes);
        dispatch({
          type: 'GET_NAME_GET_QUOTES',
          payload: {
            name: data.name,
            quoet: data.quotes
          }
        })

      })
  }, [])
  return (
    <div>
      <div>
        <label>Name:</label>
        <span>{name}</span>
      </div>
      <div>
        <label>quoet:</label>
        <span>{quoet}</span>
      </div>
      <button onClick={handleBack}>Back</button>
    </div>
  )
}