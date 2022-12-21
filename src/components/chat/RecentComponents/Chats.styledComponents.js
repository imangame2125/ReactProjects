import styled from "styled-components";

export const Wrapper = styled.ul``
export const Chat = styled.li`
  display: flex;
  padding: 16px;
  justify-content: space-between;
  box-sizing: border-box;
  border-bottom: solid 1px #ddd;
  &:last-child {
    border-bottom: none;
  }
`;
export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: dotted 1px;
`

export const ChatDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.label``

