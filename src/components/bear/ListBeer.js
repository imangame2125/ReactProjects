import { useContext } from "react";
import BearPageIndex from "./context/BearPageIndex";
import styled from "styled-components";
import BeerPageSizeContext from "./context/BearPageSizeContext";
import BeerAppContext from './context/BearAppContext'


const HeaderTitle = styled.div`

`
const HeadWord = styled.h1`
display: block;
font-size: 2em;
margin-block-start: 0.67em;
margin-block-end: 0.67em;
margin-inline-start: 0px;
margin-inline-end: 0px;
font-weight: bold;
font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;

`
const ContainerTable = styled.table`

`
const Head = styled.thead`
  background:#4caf50;
  2px solid #d8d8d8;
  color: #fff;
  font-weight: 700;
  position: sticky;
  top: 0;

`
const Body = styled.tbody`

`
const HeadRow = styled.tr`
  display:tableRow;
`
const HeadCell = styled.th`

`
const Row = styled.tr`
`
const Cell = styled.td`
  border: 1px solid #d8d8d8;
  border-left: 0;
  border-right: 0;
  padding: 5px;
  white-space: nowrap;  
`

const Link = styled.a`
text-decoration:underline;
color:blue;

`

export default function ListBeer() {
  const pageIndex = useContext(BearPageIndex)
  const pageSize = useContext(BeerPageSizeContext)
  const bear = useContext(BeerAppContext)

  return (
    <HeaderTitle>
      <HeadWord>Fruityvice</HeadWord>
      <ContainerTable>
        <Head>
          <HeadRow>
            <HeadCell>index</HeadCell>
            <HeadCell>Name</HeadCell>
            <HeadCell>Address</HeadCell>
            <HeadCell>city</HeadCell>
            <HeadCell>phone</HeadCell>
            <HeadCell>state</HeadCell>
            <HeadCell>Zip</HeadCell>
            <HeadCell>website</HeadCell>
          </HeadRow>
        </Head>
        <Body>
          {bear.map((item, index) => {
            let i = ((pageIndex - 1) * pageSize) + index + 1
            return (
              <Row key={item.id}>
                <Cell>{i}</Cell>
                <Cell>{item.name}</Cell>
                <Cell>{item.street}</Cell>
                <Cell>{item.city}</Cell>
                <Cell>{item.state}</Cell>
                <Cell>{item.postal_code}</Cell>
                <Cell>{item.phone}</Cell>
                <Cell>
                  
                  <Link target={'_blank'} href={item.website_url}>Link</Link>
                </Cell>
              </Row>
            )
          })}

        </Body>
      </ContainerTable>
    </HeaderTitle>
  )
}