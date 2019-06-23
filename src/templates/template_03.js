import React, { Component } from 'react'

export class Template03 extends Component {
  render() {
    const { loginOnly, appName } = this.props

    return (
      <div className="tmp-03">
        <div className="tmp-03__lt">
          <h1>SIGN IN</h1>
          {appName !== '' ? (
            <h2>Welcome to {appName}</h2>
          ) : null}
          {!loginOnly ? (
            <div>
              <button className="spx-btn spx-btn--pr">Option 1</button>
              <button className="spx-btn spx-btn--pr">Option 2</button>
              <button className="spx-btn spx-btn--pr">Option 3</button>
            </div>
          ) : null}
        </div>
        <div className="tmp-03__rt">
          <form className="spx-form">
            <div className="flex">
              <div className="flex__i--xs-12">
                <label className="spx-label">Username</label>
                <input className="spx-input" type="text" value="Input Value" />
              </div>
              <div className="flex__i--xs-12">
                <label className="spx-label">Password</label>
                <input className="spx-input" type="password" value="Input Value" />
              </div>
              <div className="flex__i--xs-12">
                <button className="spx-btn spx-btn--pr spx-btn--block">Sign in</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Template03
