import React, { useState, useEffect } from 'react'
import { eventManager } from '../../../utils/Toast'
import ToastMessage from '../ToastMessage'
import * as S from './styles'

export default function ToastContainer() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    function handleAddToast({ type, text }) {
      setMessages((prev) => [...prev, { id: Math.random(), text, type }])
    }
    eventManager.on('addtoast', handleAddToast)
    return () => {
      eventManager.removeListener('addtoast', handleAddToast)
    }
  }, [])

  return (
    <S.ToastContainer>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          type={message.type}
          text={message.text}
        />
      ))}
    </S.ToastContainer>
  )
}
