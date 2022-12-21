import { useState } from 'react'
import data from '../../data/question'
import Question from './Question'

export default function App(){
  const [questions,setQuestions] = useState(data)
  return(
    <main>
      <div>
        <h2>
          <strong>question and answers about login</strong>
        </h2>
        <section>
        {questions.map((item)=>{
          return(
            <Question key={item.id} {...item}/>
          )
        })}
        </section>
      </div>
    </main>
  )
}