import React, { useRef, useEffect, useState } from 'react'


const useOnClickOutSide = (handler) =>{
  const ref = useRef(null);

  useEffect(() =>{
    const listener = (event) =>{
      // Do nothing if clicking ref's element or descent elements
      if(!ref.current || ref.current.contains(event.target)){
        return
      }
      handler(event)
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('mousedown', listener)

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('mousedown', listener)
    }

  }, [ref, handler])
  return ref;
}


export default useOnClickOutSide;
