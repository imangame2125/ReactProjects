import { useEffect, useState } from 'react'
import styled from 'styled-components'
import States from '../../data/state.json'

const DropDown = styled.select`
  border: solid 1px;
  min-width: 200px;
  margin: 0 8px;
`

const Wrapper = styled.div`
  display: flex;
`

export default function StateFilter({ onCityChange }) {
  const [selectedState, setSelectedState] = useState();
  const [selectedCities, setSelectedCities] = useState();
  const array = Object.keys(States)
  const selectedArray = array.map((item) => {
    return <option key={item} value={item}>{item}</option>
  })

  function handleStateChange(e) {
    setSelectedState(e.target.value)
  }


  function handleCityChange(e) {
    setSelectedCities(e.target.value)
    onCityChange(e.target.value)
  }

  // const cities = States[selectedState]
  // let citiesStates;
  // if (selectedState !== undefined) {
  //   citiesStates = cities.map((item) => {
  //     return (
  //       <option key={item}>{item}</option>
  //     )
  //   })
  // }



  const cities = States[selectedState] || [];
  const citiesStates = cities.map((item) => {
    return (
      <option key={item}>{item}</option>
    )
  })



  return (
    <Wrapper>
      <DropDown onChange={handleStateChange} value={selectedState}>
        <option value={''} hidden>States</option>
        {selectedArray}
      </DropDown>
      <DropDown onChange={handleCityChange} value={selectedCities}>
        <option value='' hidden>Cities</option>
        {citiesStates}
      </DropDown>
    </Wrapper>
  )
}

