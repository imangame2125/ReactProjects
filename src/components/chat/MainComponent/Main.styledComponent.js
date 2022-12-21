import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  box-sizing: border-box;
  border-bottom: solid 1px #ccc;
  background-color: #aaaaaa;
`

export const MessagesWrapper = styled.div`
  flex: 1;
`

export const MessagesContainer = styled.ul`
  display: table;
  width: 100%;
`

export const InputBox = styled.div`
  display: flex;
  padding: 8px;
  box-sizing: border-box;
  align-items: center;
`

export const Text = styled.label``

export const Message = styled.li`
  display: flex;
  width: 100%;
  justify-content: ${({ isMe }) => isMe ? 'flex-end' : undefined};
  `

export const InnerMessage = styled.div`
  background-color: ${({ isMe }) => isMe ? 'green' : '#e2e2e2'};
  border: solid 1px;
  border-radius: 10px;
  padding: 8px;
  box-sizing: border-box;
  margin: 4px 4px;
`;

export const Input = styled.input`
  border-radius: 8px;
  background-color: white;
  flex: 1;
  height: 24px;
`

export const Icon = styled(FontAwesomeIcon)`
  margin: 8px;
`