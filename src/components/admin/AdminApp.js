import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ListAdmin from "./ListAdmin";

const Buttons = styled.button`
  background:rgba(80,20,190);
  border-radius:5px;
  border:1px solid;
  padding:8px;
  color:white;
  min-width:80px;
  text-align:center;
  cursor:pointer;
  &:hover{
    opacity:0.8;
  }
  &:disabled {
    opacity: 0.2; 
  }
`

export default function AdminApp() {
  const pageSize = 20
  const [admin, setAdmin] = useState([]);
  const [page, setPage] = useState(1)

  function handleNextClick() {
    setPage(page + 1)
  }

  function handlePrevClick() {
    setPage(page - 1)
  }

  useEffect(() => {
    fetch(`https://api.openbrewerydb.org/breweries?page=${page}&per_page=${pageSize}`)
      .then(response => response.json())
      .then(data => {
        setAdmin(data)
      })
  }, [page])
  return (
    <>
      <ListAdmin pageSize={pageSize} page={page} randomList={admin}></ListAdmin>
      <Buttons onClick={handlePrevClick} disabled={page <= 1}>prev</Buttons>
      <Buttons onClick={handleNextClick}>next</Buttons>
    </>
  )
}