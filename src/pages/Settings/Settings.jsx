import React, {useState , useEffect} from 'react'
import {Select , ButtonClear} from "@/pages/Settings/components"
import {useDispatch , useSelector} from "react-redux"
import {clearHistory} from "@/reducers/historyReducer"
import {changeTheme} from "@/reducers/themeReducer"

const themes = ['Light theme', 'Colored theme', 'Dark theme']

export const Setting = () => {
  const dispatch = useDispatch()
  const commonTheme = useSelector(state => state.theme.theme)

  const [mode, setMode] = useState(false)

  const changeMode = () => {
    setMode(!mode)
  }
  const changeThemeHandler = theme => {
   dispatch(changeTheme(theme))
    setMode(false)
  }
  useEffect(() => {
    document.body.setAttribute('data-theme', commonTheme)
  }, [commonTheme])

  const clearHistoryHandler = () => {
    dispatch(clearHistory())
  }
  return (
    <Select>
      <h3>Settings</h3>
      <h5>Switch theme</h5>
      <div className="select">
        <div onClick={changeMode} className="chosen">{commonTheme}</div>
        {mode && themes.filter(i => i !== commonTheme).map(i => <div className="notChosen" onClick={() => changeThemeHandler(i)}
        key={i + commonTheme}>{i}
                                                                </div>)}
      </div>
      <ButtonClear onClick={clearHistoryHandler}>Clear All History</ButtonClear>
    </Select>
  )
}





