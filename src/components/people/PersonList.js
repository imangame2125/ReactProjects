import React, { useContext } from "react"
import styled from "styled-components"
import ThemeContext, { useTheme } from '../../context/ThemeContext'
import PeopleContext from "./context/PeopleContext"


const Wrapper = styled.ul`
border: solid 1px;
padding: 20px;
border-radius: 5px;
margin: 20px;
`

const PersonItem = styled.li`
padding: 5px;
background:#80dafd;
border-bottom: solid 1px #ccc;
&:last-child {
  border-bottom: none;
}
&:hover {
  position: static;
  background-color: green;
  cursor: pointer;
  color:whiteSmoke;
  font-size:1.5rem;
}
 
`


export default function PersonList({ onClick }) {
  const theme = useTheme()
  // const people = useContext(PeopleContext);
  //const theme = useContext(ThemeContext);
  function handlePersonClick(id) {
    onClick(id)
  }
  return (

    <Wrapper>
      <PeopleContext.Consumer>
        {(people) => {
          return people.map((item, index) => {
            return (
              // <PersonItem onClick={() => onClick(item.id)} key={item.id}> .{index + 1} {item.name}</PersonItem>
              <PersonItem style={{ color: theme }} onClick={() => handlePersonClick(item.id)} key={item.id}> .{index + 1} {item.name}</PersonItem>
            )
          })

        }}
      </PeopleContext.Consumer>
    </Wrapper>
  )
}

//export default function PersonListWithTheme(props) {
 // return (
   // <ThemeContext.Consumer>
     // {
       // theme => <PersonList {...props} theme={theme} />
      //}
    //</ThemeContext.Consumer>
  //)
//}