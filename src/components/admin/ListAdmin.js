import React from "react"
import styled from "styled-components"

export default function ListAdmin({ randomList = [], page, pageSize }) {
  const Table = styled.table`
  
  `
  const TableHead = styled.thead`
  background:#4caf50;
  2px solid #d8d8d8;
  color: #fff;
  font-weight: 700;
  position: sticky;
  top: 0;
  `
  const TableRow = styled.tr`
  display:tableRow;
  `
  const TableTitleBar = styled.th`
  `
  const TableBody = styled.tbody`
  
  `
  const TableRowBody = styled.tr`
  
  `
  const TableCell = styled.td`
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
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableTitleBar>index</TableTitleBar>
          <TableTitleBar>name</TableTitleBar>
          <TableTitleBar>Address</TableTitleBar>
          <TableTitleBar>city</TableTitleBar>
          <TableTitleBar>state</TableTitleBar>
          <TableTitleBar>zip</TableTitleBar>
          <TableTitleBar>phone</TableTitleBar>
          <TableTitleBar>website</TableTitleBar>
        </TableRow>
      </TableHead>
      <TableBody>
        {randomList.map((item, index) => {
          let i = ((page - 1) * pageSize) + index + 1
          return (
            <TableRowBody key={item.id}>
              <TableCell>{i}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.street}</TableCell>
              <TableCell>{item.city}</TableCell>
              <TableCell>{item.state}</TableCell>
              <TableCell>{item.postal_code}</TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell>
                <Link target={'_blank'} href={item.website_url}>{item.website_url}</Link>
              </TableCell>

            </TableRowBody>
          )
        })}
      </TableBody>
    </Table>
  )
}