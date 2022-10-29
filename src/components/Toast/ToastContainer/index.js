import React, { useState, useEffect } from 'react';

import ToastMessage from '../ToastMessage'
import * as S from './styles'

export default function ToastContainer(){
  const [messages, setMessages] = useState([])


  useEffect(() => {
      function handleAddToast(event){
        const  { type, text } = event.detail;
        setMessages((prev) => [...prev, { id: Math.random(), text, type}])

      }
      document.addEventListener('addtoast', handleAddToast)

     return () =>{
        document.removeEventListener('addtoast', handleAddToast)
     }
  },[])

  return(
    <S.ToastContainer>
      {messages.map((message) => ( <ToastMessage key={message.id} type={message.type} text={message.text}/>))}
    </S.ToastContainer>
  )
}
