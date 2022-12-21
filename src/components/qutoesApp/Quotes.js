import React, { useEffect, useReducer, useState } from "react";
import { getItem } from "./GetListDataServer";

function reducer(state, action) {
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