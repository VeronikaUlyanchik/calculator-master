import React from 'react'
import {Select , ButtonClear} from "@/pages/Settings/components"
import {clearHistory} from "@/reducers/historyReducer"
import {changeTheme} from "@/reducers/themeReducer"
import {connect} from "react-redux"
import PropTypes from "prop-types"

const themes = ['Light theme', 'Colored theme', 'Dark theme']

class SettingsClass extends React.Component {

  state = {
    selectMode: false,
  }

  handleMode = () => {
    this.setState({
      selectMode: !this.state.selectMode,
    })
  }

  changeThemeHandler = theme => {
    this.props.changeTheme(theme)
    this.setState({
      selectMode: false,
    })
  }

  handleClearHistory = () => {
    this.props.clearHistory()
  }

  render() {
    return (
      <Select>
        <h3>Settings</h3>
        <h5>Switch theme</h5>
        <div className="select">
          <div onClick={this.handleMode} className="chosen">{this.props.commonTheme}</div>
          {this.state.selectMode && themes.filter(i => i !== this.props.commonTheme).map(i => <div className="notChosen"
                                                                                 onClick={() => this.changeThemeHandler(i)}
                                                                                 key={i + this.props.commonTheme}>{i}
                                                                                              </div>)}
        </div>
        <ButtonClear onClick={this.handleClearHistory}>Clear All History</ButtonClear>
      </Select>
    )
  }
}

const mapStateToProps = state => ({
  commonTheme: state.theme.theme,
})

export default connect(mapStateToProps,{clearHistory, changeTheme})(SettingsClass)

SettingsClass.propTypes ={
  commonTheme: PropTypes.string.isRequired,
  clearHistory: PropTypes.func.isRequired,
  changeTheme: PropTypes.func.isRequired,
}
