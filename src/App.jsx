import { useState } from 'react';
import './App.css'


const FaqItem = ({answer,question})=>{
  const [show, setShow] = useState(false);

  const toggleShow = ()=>{
    setShow(show=>!show);
  }
       return(
           <div className={`faq-item ${show ? "active" : " "}`}>
              <div className="faq-item-header" onClick={toggleShow}><h4>{question}</h4></div>
              <div className="faq-item-body">
                  <div className="faq-item-body-content">
                      {answer}
                  </div>
              </div>
           </div>
       );
}
const FaqAccordion = ({data})=>{
  
       return(
         <div className="faq-accordion">
          <h1>FAQs</h1>
          {data.map((item)=>{
            return <FaqItem key={item.id} question = {item.question} answer = {item.answer}/>
          })}
         </div>
       )
}
const data = [
  {
    "id": 1,
    "question": "What is React?",
    "answer": "React is a JavaScript library for building user interfaces, developed by Facebook."
  },
  {
    "id": 2,
    "question": "Why do we use React?",
    "answer": "React allows developers to create reusable UI components and build single-page applications efficiently."
  },
  {
    "id": 3,
    "question": "Where does React come from?",
    "answer": "React was initially developed by Facebook for their internal projects and later open-sourced."
  },
  {
    "id": 4,
    "question": "Where can I learn React?",
    "answer": "There are many online resources and tutorials available for learning React, including official documentation, online courses, and community forums."
  },
  {
    "id": 5,
    "question": "Is React difficult to learn?",
    "answer": "React has a relatively shallow learning curve, especially for developers familiar with JavaScript and HTML. However, mastering advanced concepts may require time and practice."
  },
  {
    "id": 6,
    "question": "Can React be used with other libraries or frameworks?",
    "answer": "Yes, React can be used alongside other JavaScript libraries and frameworks, such as Redux for state management, React Router for routing, and many more."
  },
  {
    "id": 7,
    "question": "What are React Hooks?",
    "answer": "React Hooks are functions that allow functional components to manage state, lifecycle, and other React features without writing a class component."
  }
];



function App() {

  return (
    <>
       <FaqAccordion data={data}/>
    </>
  )
}

export default App
