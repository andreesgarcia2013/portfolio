import React, { useEffect, useState } from 'react'

export const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleChangeTheme = () => {
    setIsDarkMode(state=>!state);
  }

  useEffect(() => {
    if (isDarkMode) {
      document.querySelector('html').classList.add('dark')
    }
    else{
      document.querySelector('html').classList.remove('dark')
    }
  }, [])
  

  return (
    <div className='bg-purple-200 dark:bg-blue-950 w-screen h-screen'>
      Hola Mundo
    </div>
  )
}
