import { Input, Label, Wrapper } from "./TitleBar.styledComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


function TitleBar() {
  const [mode, setMode] = useState('list');

  const isListMode = mode === 'list';
  const isSearchMode = mode === 'search';

  function handleChangeMode() {
    if (mode === 'list') {
      setMode('search')
    }
    else {
      setMode('list');
    }
  }

  return (
    <Wrapper>
      <FontAwesomeIcon icon={faBars} />
      {isListMode && <Label>Messenger</Label>}
      {isSearchMode && <Input />}
      <FontAwesomeIcon
        icon={isListMode ? faMagnifyingGlass : faArrowLeft}
        onClick={handleChangeMode}
      />
    </Wrapper>
  )
}

export default TitleBar;