import React, {useState , useEffect} from 'react'
import {Select , ButtonClear} from "@/pages/Settings/components"

const themes = ['Light theme', 'Colored theme', 'Dark theme']

export const Setting = () => {
  const [theme, setTheme] = useState(themes[0])
  const [mode, setMode] = useState(false)

  const changeMode = () => {
    setMode(!mode)
  }
  const changeTheme = theme => {
    setTheme(theme)
    setMode(false)
  }
  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <Select>
      <h3>Settings</h3>
      <h5>Switch theme</h5>
      <div className="select">
        <div onClick={changeMode} className="chosen">{theme}</div>
        {mode && themes.filter(i => i !== theme).map(i => <div className="notChosen" onClick={() => changeTheme(i)}
        key={i + theme}>{i}
                                                          </div>)}
      </div>
      <ButtonClear>Clear All History</ButtonClear>
    </Select>
  )
}





