import { useState, useRef, useEffect } from 'react'
// Função  para salvar estados de forma asyncrona

export default function useSafeAsyncState(initialState) {
  const [state, setState] = useState(initialState)
  const isMounted = useRef(false)

  useEffect(() => {
    isMounted.current = true

    return () => {
      isMounted.current = false
    }
  }, [])

  function setSafeAsyncSate(data) {
    if (isMounted.current) {
      setState(data)
    }
  }

  return [state, setSafeAsyncSate]
}
