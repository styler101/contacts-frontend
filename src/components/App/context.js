import React from 'react';

const Context = React.createContext({})


const AppContext = ( { children }) =>{
  const [activeSideBar, setActiveSideBar] = React.useState(false)

  const handleSideBar = (value) =>{
    setActiveSideBar(value)
  }

  return(
    <Context.Provider value={{ activeSideBar, onSideBar: handleSideBar}}>
      {children}
    </Context.Provider>
  )

}

function useApp(){
  const context = React.useContext(Context);
  if(!context) throw new Error('You must provided the app inside component')
  return context;
}

export { useApp, AppContext }
