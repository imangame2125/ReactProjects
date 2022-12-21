import { useReducer, useState } from "react";
import styled from "styled-components"


const Wrapper = styled.div``;
const Title = styled.h1``;
const Rate = styled.div``;
const Style = styled.div``
const MoreButton = styled.a``;
const DetailsWrapper = styled.ul``;
const DetailRecord = styled.li``;
const Director = styled.div``;
const Star = styled.div``;
const Back = styled.button``;

const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case 'SET-OPEN':
      return {
        open: !state.open
      }
  }
  return state
}

const initialValue = {
  open: false
}
export default function Movie({ movie, onBackClick }) {

  const [{ open }, dispatch] = useReducer(reducer, initialValue)

  function handleMoreClick() {
    dispatch({
      type: 'SET-OPEN',
      payload: null
    })
    
  }

  return (
    <Wrapper>
      <Title>{movie.name}</Title>
      <Rate>{movie.rate}</Rate>
      <Style>{movie.filmStyle}</Style>
      {open && <DetailsWrapper>
        {movie.details.map((item, index) => {
          return <DetailRecord key={index}>
            <Director>{item.director}</Director>
            <Star>{item.starActor}</Star>
          </DetailRecord>
        })}
      </DetailsWrapper>}
      <MoreButton onClick={handleMoreClick}>{open ? 'Less' : 'More'} ...</MoreButton>
      {onBackClick && <Back onClick={onBackClick}>Back</Back>}
    </Wrapper>
  )
}