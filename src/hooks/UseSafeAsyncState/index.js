import { useState, useRef, useEffect, useCallback } from 'react'
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

  const setSafeAsyncSate = useCallback((data) => {
    if (isMounted.current) {
      setState(data)
    }
  }, [])

  return [state, setSafeAsyncSate]
}
