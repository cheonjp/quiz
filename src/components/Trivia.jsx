import React from 'react'
import {useEffect, useState} from 'react'
import useSound from "use-sound"
import wrong from "../assets/Fart Toot.mp3"
import correct from "../assets/fart.mp3"
import play from "../assets/play.mp3"

function Trivia({data,setStop, questionNumber, setQuestionNumber}) {
  const [question,setQuestion]=useState(null)
  const [selectedAnswer,setSelectedAnswer]=useState(null)
  const [className,setClassName]=useState("answer")
  const [correctAnswer] = useSound(correct)
  const [wrongAnswer] = useSound(wrong) 
  const [letsPlay] = useSound(play)

  useEffect(()=>{
    letsPlay()
  },[letsPlay])

  useEffect(()=>{
    setQuestion(data[questionNumber-1])
  },[data,questionNumber])

  const delay = (duration, callback) =>{
    setTimeout(()=>{
      callback()
    },duration)
  }

  const handleClick=(a)=>{
    console.log(a)
    setSelectedAnswer(a)
    setClassName("answer active")
    delay(3000,()=> 
      setClassName(a.correct ? "answer correct" : "answer wrong")
    )
    delay(6000,()=> {
      if(a.correct){
        setQuestionNumber((prev)=> prev+1)
        // setQuestionNumber(questionNumber+1)
        setSelectedAnswer(null)
        correctAnswer()
      }else{
        setStop(true)
        wrongAnswer()
      }
    }
      
    )
   
  }
  return (
    <div className="trivia">
        <div className="question">{question?.question}</div>
        <div className="answers">
          {question?.answers.map((a)=> (
            <div className={selectedAnswer === a ? className: "answer"} onClick={()=>handleClick(a)}>{a.text}</div>
          ))}
        </div>
    </div>
  )
}

export default Trivia