import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";
import React, { useEffect, useReducer, useState } from "react";
import GetList from './GetListDataServer'


import { LiList, Ul } from "./GetListDecriptionStyled";
import Quotes from "./Quotes";
function handleInitDataReceived(state, payload) {
  return {
    ...state,
    items: payload,
    loading: false
  };
}
function reducer(state, action) {
  // const { type, payload } = action;
  switch (action.type) {
    case 'INIT_DATA_RECEIVED':
      return handleInitDataReceived(state, action.payload);
    // return {
    //   ...state,
    //   items: action.payload,
    //   loading: false
    // };
    case 'QUOTE_SELECTED':
      return {
        ...state,
        selectedId: action.payload

      }

    case 'GO_TO_LIST':
      return {
        ...state,
        selectedId: null
      }
    default:
      break;
  }
  return state;
}

const initialValue =
{
  items: [],
  loading: true,
  selectedId: null

}

// const action1 = {
//   type: 'name',
//   payload: {}
// }

export default function List() {
  // const [items, setItems] = useState([]);
  // const [loading, setLoading] = useState(true)
  // const [selectedId, setSelectedId] = useState(null)
  const [{ items, loading, selectedId }, dispatch] = useReducer(reducer, initialValue)

  useEffect(() => {
    GetList().then(data => {
      dispatch({
        type: 'INIT_DATA_RECEIVED',
        payload: data
      })
      // setItems(data)
      // setLoading(false)
    })
  }, [])
  function handleClickItem(id) {
    dispatch({
      type: 'QUOTE_SELECTED',
      payload: id
    })
    // setSelectedId(id)
  }

  function handleBackClick() {
    dispatch({
      type: 'GO_TO_LIST',
      // payload: null
    })
    // setSelectedId(null)
  }

  if (loading) {
    return (
      <h1>Please wait...</h1>
    )
  }
  return (
    <>
      {!selectedId && <Ul>
        {items.map((item) => {
          return (
            <LiList onClick={() => handleClickItem(item.id)} key={item.id}>{item.name}</LiList>
          )
        })}
      </Ul>}
      {selectedId && <Quotes onBackClick={handleBackClick} id={selectedId} />}
    </>
  )




}