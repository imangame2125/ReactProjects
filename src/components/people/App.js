import React, { useEffect, useState } from "react"
import styled, { useTheme } from "styled-components"
import GetDataPerson from "./GetDataPerson";
import Person from './Person'
import PersonList from './PersonList'
import PeopleContext from "./context/PeopleContext";


const Btn = styled.button`
  padding:20px;
  border:1px solid;
  border-radius:20px;
  font-weight:700;
  color:red;
  font-size:30px;
  cursor:pointer;
`

function usePeople() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    GetDataPerson()
      .then((people) => {
        setPeople(people)
      })
  }, [])

  return people;
}


export default function App() {
  // const [people, setPeople] = useState([]);
  const [selectedPersonId, setSelectedPersonId] = useState(null);
  const [tallestPerson, setTallestPerson] = useState(false);
  const [oldestPerson, setOldestPerson] = useState(false)


  const people = usePeople();

  function handlePersonClick(id) {

    setSelectedPersonId(id)
  }


  function handleShowTallest() {
    setTallestPerson(true)

  }


  function handleBackClick(ali) {
    setSelectedPersonId(null)
    setTallestPerson(false)
    setOldestPerson(false)
    console.log(ali);
  }

  function handleShowOldest() {
    setOldestPerson(true)

  }
  // useEffect(() => {
  //   GetDataPerson()
  //     .then((people) => {
  //       setPeople(people)
  //     })
  // }, [])


  const selectedPerson = people.find((item) => item.id === selectedPersonId)

  let tallets = 0;
  for (let i = 0; i < people.length; i++) {
    const tallestPerson = people[i];
    if (tallestPerson.height > tallets) {
      tallets = tallestPerson.height
    }
  }

  let oldest = 0;
  for (let i = 0; i < people.length; i++) {
    const oldestPerson = people[i]
    if (oldestPerson.age > oldest) {
      oldest = oldestPerson.age
    }
  }
  const showOldestPerson = people.find((item) => item.age === oldest)
  const showTalletsPerson = people.find((item) => item.height === tallets)
  return (
    <div>
      {selectedPerson ?
        <Person person={selectedPerson} onBackClick={handleBackClick} />
        :
        <PeopleContext.Provider value={people}>
          <PersonList onClick={handlePersonClick}></PersonList>
        </PeopleContext.Provider>
      }
      {!selectedPerson && <Btn onClick={handleShowTallest}>The Tallest</Btn>}
      {!selectedPerson && <Btn onClick={handleShowOldest}>The Oldest</Btn>}
      {!selectedPerson && tallestPerson &&
        <div>
          <h1>Tallets person</h1>
          <Person person={showTalletsPerson}></Person>
        </div>}
      {!selectedPerson && oldestPerson &&
        <div>
          <h1>oldest person</h1>
          <Person person={showOldestPerson}></Person>
        </div>}
    </div>
  )
}