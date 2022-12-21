import styled from "styled-components"

const Wrapper = styled.ul`
  // background-color: #ccc;
  border: solid 1px;
  padding: 20px;
  border-radius: 5px;
  margin: 20px;
`;
const MovieItem = styled.li`
  padding: 5px;
  border-bottom: solid 1px #ccc;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: #cdcdcd;
    cursor: pointer;
  }
`;



export default function MovieList({ movies = [], onClick }) {
  return (
    <Wrapper>
      {movies.map((item, index) => {
        return <MovieItem onClick={() => onClick(item.id)} key={item.id}>{index + 1}. {item.name}</MovieItem>
      })}
    </Wrapper>
  ) 
}