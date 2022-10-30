import React, { useState, useEffect, useCallback } from 'react'
import { eventManager } from '../../../utils/Toast'
import ToastMessage from '../ToastMessage'
import * as S from './styles'

export default function ToastContainer() {

  const [messages, setMessages] = useState([])

  useEffect(() => {
    function handleAddToast({ type, text, duration }) {
      setMessages((prev) => [...prev, { id: Math.random(), text, type, duration }])
    }
    eventManager.on('addtoast', handleAddToast)
    return () => {
      eventManager.removeListener('addtoast', handleAddToast)
    }
  }, [])

  const handleRemoveMessage = useCallback((id) => {
    setMessages((prev) => prev.filter((message) => message.id !== id))
  }, [])

  return (
    <S.ToastContainer>
      {messages.map((message) => (
        <ToastMessage
          onRemoveMessage={handleRemoveMessage}
          key={message.id}
          message={message}
        />
      ))}
    </S.ToastContainer>
  )
}

