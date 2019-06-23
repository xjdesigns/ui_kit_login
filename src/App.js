import React, { Component } from 'react'
import TemplateDisplay from './components/TemplateDisplay'

class App extends Component {
  state = {
    isViewOnly: false,
    whichTemplate: '01',
    loginOnly: false,
    theme: 'light',
    appName: '',
  }

  componentDidMount () {
    window.addEventListener('keyup', ev => {
      if (ev.keyCode === 27) {
        this.setState(prevState => {
          return {
            isViewOnly: !prevState.isViewOnly,
          }
        })
      }
    })
  }

  handleFullView = () => {
    this.setState(prevState => {
      return {
        isViewOnly: !prevState.isViewOnly,
      }
    })
  }

  changeTemplate = tmp => {
    this.setState({
      whichTemplate: tmp,
    })
  }

  updateLoginOnly = () => {
    this.setState(prevState => {
      return {
        loginOnly: !prevState.loginOnly,
      }
    })
  }

  updateTheme = () => {
    this.setState(prevState => {
      return {
        theme: prevState.theme === 'light' ? 'dark' : 'light',
      }
    })
  }

  updateAppName = val => {
    this.setState({ appName: val })
  }

  urlConstructor = () => {
    const { whichTemplate, loginOnly, theme, appName } = this.state
    const url = 'http://localhost:3000'
    const appVal = appName !== '' ? `&appName=${appName}` : ''

    return `${url}?tmpl=${whichTemplate}${appVal}${loginOnly ? '&loginOnly=true' : ''}&theme=${theme}`
  }

  render() {
    const { isViewOnly, whichTemplate, loginOnly, theme, appName } = this.state

    return (
      <div className={`aui-base ${isViewOnly ? 'view-only' : ''}`}>
        <div className="aui-header">
          <h4>Auth UI Kit</h4>
        </div>

        <div className="aui-editor">
          <p className="aui-url-display">{this.urlConstructor()}</p>
          <div className="aui-editor__pane">
            <button onClick={this.handleFullView} className="spx-btn spx-btn--pr spx-btn--sm">View</button>
          </div>
          <div className="aui-editor__pane">
            <form class="spx-form">
              <label class="spx-label">Application Name</label>
              <input class="spx-input" type="text" value={appName} onChange={ev => this.updateAppName(ev.target.value)} />
            </form>
          </div>
          <div className="aui-editor__pane">
            <form class="spx-form">
              <div class="spx-select">
                <select onChange={ev => this.changeTemplate(ev.target.value)}>
                  <option value="01">Template 01</option>
                  <option value="02">Template 02</option>
                  <option value="03">Template 03</option>
                </select>
              </div>
            </form>
          </div>
          <div className="aui-editor__pane">
            <label className="spx-checkbox">
              <input type="checkbox" name="checkbox" onChange={this.updateLoginOnly} checked={loginOnly} />
              <div className="spx-checkbox__box" data-icon="check"></div>
              <div className="spx-checkbox__material"></div>
              Login Only
            </label>
          </div>
          <div className="aui-editor__pane">
            <label className="spx-checkbox">
              <input type="checkbox" name="checkbox" onChange={this.updateTheme} checked={theme === 'dark'} />
              <div className="spx-checkbox__box" data-icon="check"></div>
              <div className="spx-checkbox__material"></div>
              Dark theme
            </label>
          </div>
        </div>

        <div className="aui-live-pane" theme={theme}>
          <TemplateDisplay whichTemplate={whichTemplate} loginOnly={loginOnly} appName={appName} />
        </div>
      </div>
    )
  }
}

export default App;
