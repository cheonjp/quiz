import { useEffect,useMemo } from 'react'
import {useState} from 'react'
import "./app.css"
import Trivia from "./components/Trivia"
import Timer from "./components/Timer"

function App() {

  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false)
  const [earned, setEarned] = useState("$ 0")
  const data = [
    {
      id:1,
      question: "Rolex is a company that specializes in what type of product?",
      answers:[
        {
          text:"phone",
          correct:false,
        },
        {
          text:"watches",
          correct:true,
        },
        {
          text: "Food",
          correct:false,
        },
        {
          text:"Cosmetic",
          correct: false,
        }
      ]
    },
    {
      id:2,
      question: "When did the website 'Facebook' launch?",
      answers:[
        {
          text:"2004",
          correct:true,
        },
        {
          text:"2005",
          correct:false,
        },
        {
          text: "2006",
          correct:false,
        },
        {
          text:"2007",
          correct: false,
        }
      ]
    },
    {
      id:3,
      question: "Who played the character of harry potter in movie?",
      answers:[
        {
          text:"Jone Cena",
          correct:false,
        },
        {
          text:"Leonardo Di Caprio",
          correct:false,
        },
        {
          text: "Denzel Washington",
          correct:false,
        },
        {
          text:"Deniel Red Cliff",
          correct: true,
        }
      ]
    },
    {
      id:4,
      question: "What’s the shortcut for the “copy” function on most computers?",
      answers:[
        {
          text:"Ctrl V",
          correct:false,
        },
        {
          text:"Alt C",
          correct:false,
        },
        {
          text: "Ctrl C",
          correct:true,
        },
        {
          text:"Alt B",
          correct: false,
        }
      ]
    },
    {
      id:5,
      question: "Which planet has the most gravity?",
      answers:[
        {
          text:"Jupiter",
          correct:true,
        },
        {
          text:"Mars",
          correct:false,
        },
        {
          text: "Earth",
          correct:false,
        },
        {
          text:"Venus",
          correct: false,
        }
      ]
    },
    {
      id:6,
      question: "What is the name of the song that Queen Elsa sings as she builds her ice castle in the movie Frozen?",
      answers:[
        {
          text:"Seven",
          correct:false,
        },
        {
          text:"Let it go",
          correct:true,
        },
        {
          text: "Beat it",
          correct:false,
        },
        {
          text:"Hello",
          correct: false,
        }
      ]
    },
    {
      id:7,
      question: "What was the name of the actor who played Jack Dawson in Titanic?",
      answers:[
        {
          text:"Bruce Lee",
          correct:false,
        },
        {
          text:" Leonardo DiCaprio",
          correct:true,
        },
        {
          text: "keanu reeves",
          correct:false,
        },
        {
          text:"alexandra grant",
          correct: false,
        }
      ]
    },
    {
      id:8,
      question: "In what year was the first episode of South Park aired?",
      answers:[
        {
          text:"1995",
          correct:false,
        },
        {
          text:" 1996",
          correct:false,
        },
        {
          text: "1997",
          correct:true,
        },
        {
          text:"1998",
          correct: false,
        }
      ]
    },
    {
      id:9,
      question: "When Michael Jordan played for the Chicago Bulls, how many NBA Championships did he win?",
      answers:[
        {
          text:"5",
          correct:false,
        },
        {
          text:"6",
          correct:true,
        },
        {
          text: "7",
          correct:false,
        },
        {
          text:"8",
          correct: false,
        }
      ]
    },
    {
      id:10,
      question: "Which animal can be seen on the Porsche logo?",
      answers:[
        {
          text:"Lyon",
          correct:false,
        },
        {
          text:"Hippo",
          correct:false,
        },
        {
          text: "Tiger",
          correct:false,
        },
        {
          text:"Horse",
          correct: true,
        }
      ]
    },
    {
      id:11,
      question: "Which company owns Bugatti, Lamborghini. Audi, Porsche, and Ducati?",
      answers:[
        {
          text:"GM",
          correct:false,
        },
        {
          text:"Toyota",
          correct:false,
        },
        {
          text: "Hyundai",
          correct:false,
        },
        {
          text:"Volkswagen",
          correct: true,
        }
      ]
    },
    {
      id:12,
      question: "How many soccer players should each team have on the field at the start of each match?",
      answers:[
        {
          text:"8",
          correct:false,
        },
        {
          text:"9",
          correct:false,
        },
        {
          text: "10",
          correct:false,
        },
        {
          text:"11",
          correct: true,
        }
      ]
    },
    {
      id:13,
      question: "Which country produces the most coffee in the world?",
      answers:[
        {
          text:"Brazil",
          correct:true,
        },
        {
          text:"Mexico",
          correct:false,
        },
        {
          text: "Columbia",
          correct:false,
        },
        {
          text:"Spain",
          correct: false,
        }
      ]
    },
    {
      id:14,
      question: "Which country invented tea?",
      answers:[
        {
          text:"Korea",
          correct:false,
        },
        {
          text:"Japan",
          correct:false,
        },
        {
          text: "China",
          correct:true,
        },
        {
          text:"Russia",
          correct: false,
        }
      ]
    },
    {
      id:15,
      question: "Which European nation was said to invent hot dogs?",
      answers:[
        {
          text:"Russia",
          correct:false,
        },
        {
          text:"Germany",
          correct:true,
        },
        {
          text: "Italy",
          correct:false,
        },
        {
          text:"USA",
          correct: false,
        }
      ]
    },

  ]
  const moneyPyramid = useMemo(()=>
    [
      {id:1, amount:"$ 100"},
      {id:2, amount:"$ 200"},
      {id:3, amount:"$ 300"},
      {id:4, amount:"$ 500"},
      {id:5, amount:"$ 1000"},
      {id:6, amount:"$ 2000"},
      {id:7, amount:"$ 4000"},
      {id:8, amount:"$ 8000"},
      {id:9, amount:"$ 16000"},
      {id:10, amount:"$ 32000"},
      {id:11, amount:"$ 64000"},
      {id:12, amount:"$ 125000"},
      {id:13, amount:"$ 250000"},
      {id:14, amount:"$ 500000"},
      {id:15, amount:"$ 1000000"},
    ].reverse(),
  [])

  useEffect(()=>{
    setEarned(moneyPyramid.find((m)=>m.id === questionNumber).amount)
    console.log(earned)
  },[moneyPyramid,questionNumber])

  return (
    <div className="app">
      <div className="main">
        {stop ? <h1 className="endText">You earned:{earned}</h1> : (
          <>
            <div className="top">
              <div className="timer">
                <Timer setStop={setStop} questionNumber={questionNumber} />
              </div>
            </div>
            <div className="bottom">
              <Trivia data={data} 
                setStop={setStop} 
                setQuestionNumber={setQuestionNumber} 
                questionNumber={questionNumber}/>
            </div>
          </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map(m=>(
            <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount}</span>
            </li>
          ))}
          
        </ul>
      </div>
    </div>
  );
}

export default App;
