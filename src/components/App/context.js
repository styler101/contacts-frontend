import React, { useCallback } from 'react'

const Context = React.createContext({})

const AppContext = ({ children }) => {
  const [activeSideBar, setActiveSideBar] = React.useState(false)
  const [theme, setTheme] = React.useState(() => {
    const storagedTheme = localStorage.getItem('@mycontacts')
    if (storagedTheme) {
      return storagedTheme
    }
    return 'light'
  })

  const handleSwitchTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
    localStorage.setItem('@mycontacts', theme)
  }, [theme])

  const handleSideBar = (value) => {
    setActiveSideBar(value)
  }

  return (
    <Context.Provider
      value={{
        activeSideBar,
        onSideBar: handleSideBar,
        setActiveSideBar: setActiveSideBar,
        theme,
        handleSwitchTheme,
      }}
    >
      {children}
    </Context.Provider>
  )
}

function useApp() {
  const context = React.useContext(Context)
  if (!context) throw new Error('You must provided the app inside component')
  return context
}

export { useApp, AppContext }
