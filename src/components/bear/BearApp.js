import React, { useEffect, useReducer, useState } from "react";
import styled from "styled-components";
import BearAppContext from "./context/BearAppContext";
import BearPageIndex from "./context/BearPageIndex";
import BearPageSizeContext from "./context/BearPageSizeContext";
import ListBear from "./ListBear";
import StateFilter from "./StateFilter";

const Select = styled.select`
width: 100%;
height:35px;
background: white;
color: gray;
padding-left: 5px;
font-size: 14px;
border:none;
margin-left: 10px;

     option {
       color: black;
       background: white;
       font-weight: small;
       display: flex;
       white-space: pre;
       min-height: 20px;
       padding: 0px 2px 1px;
     }
`

const NavigtionButton = styled.button`
  border-radius:5px;
  border:1px solid;
  padding:8px;
  min-width:80px;
  text-align:center;
  cursor:pointer;
  background-color:#ddccff;
  &:hover{
    opacity:0.8;
  }
  &:disabled {
    opacity: 0.3; 
  }
  
`

const initValue = {
  bearItems: [],
  pageIndex: 1,
  pageSize: 10,
  selectedCity: 'Dallas'
}

function reducer(state, action) {
  switch (action.type) {
    case 'INDEX_INC':
      return {
        ...state,
        pageIndex: state.pageIndex + 1
      }
    case 'INDEX_DEC':
      return {
        ...state,
        pageIndex: state.pageIndex - 1

      }
    case 'SET_PAGE_SIZE':
      return {
        ...state,
        pageSize: action.payload
      }

    case 'SELECTED_CITY':
      return {
        ...state,
        selectedCity: action.payload
      }
    case 'GET_DATA':
      return {
        ...state,
        bearItems: action.payload
      }
  }

  return state
}

export default function BearApp() {
  const [{ bearItems, pageIndex, pageSize, selectedCity }, dispatch] = useReducer(reducer, initValue)


  function handleNextClick() {
    dispatch({
      type: 'INDEX_INC'
    })
  }

  function handlePrevClick() {
    dispatch({
      type: 'INDEX_DEC'
    })
  }
  function handleChange(e) {
    const selectedPageSize = parseInt(e.target.value)
    dispatch({
      type: 'SET_PAGE_SIZE',
      payload: selectedPageSize
    })
  }

  function handleCityChange(city) {
   
    dispatch({
      type: 'SELECTED_CITY',
      payload: city
    })
  
  }

  function formatCity(city) {
   
    return city.split(' ').join('_');
  }

  useEffect(() => {
 
    const formattedCity = formatCity(selectedCity);
    fetch(`https://api.openbrewerydb.org/breweries?by_city=${formattedCity}&page=${pageIndex}&per_page=${pageSize}`)
      .then(response => response.json())
      .then((data) => {
        dispatch({
          type: 'GET_DATA',
          payload: data
        })
      
      })
  }, [pageIndex, pageSize, selectedCity])
  return (
    <>
      <BearAppContext.Provider value={bearItems}>
        <BearPageSizeContext.Provider value={pageSize}>
          <BearPageIndex.Provider value={pageIndex}>
            <ListBear pageSize={pageSize} pageIndex={pageIndex} bear={bearItems} />
            <NavigtionButton disabled={pageIndex <= 1} onClick={handlePrevClick}>Previous</NavigtionButton>
            <NavigtionButton onClick={handleNextClick}>Next</NavigtionButton>
            <Select onChange={handleChange} value={pageSize}>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
              <option value={40}>40</option>
              
            </Select>

            <StateFilter onCityChange={handleCityChange} />
          </BearPageIndex.Provider>
        </BearPageSizeContext.Provider>
      </BearAppContext.Provider>
    </>


  )
}

