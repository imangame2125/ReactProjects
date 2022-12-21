import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'


const AxiosApp = () => {
  const [list, setList] = useState([])





  useEffect(() => {
    axios.get('https://api.openbrewerydb.org/brsdseweries?by_city=')
      .then((res) => {
        const lists = res.data
        console.log(res);
        setList(lists)

      }).catch((error)=>{
        return error
      })
  }, [])

  return (
    <ul>
      {list.map((item) => {
        return (
          <li key={item.id}>{item.name}</li>
        )
      })}
    </ul>
  )
}

//  client(Options).then(onSuccess).catch(onError)


export default AxiosApp
