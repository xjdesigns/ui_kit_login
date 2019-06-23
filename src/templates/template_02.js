import React, { Component } from 'react'

export class Template02 extends Component {
  render() {
    const { loginOnly, appName } = this.props

    return (
      <div className="tmp-02">
        <form className="spx-form">
          <div className="flex">
            <div className="flex__i--xs-12">
              {appName !== '' ? (
                <h2>Welcome to {appName}</h2>
              ) : null}
            </div>
            <div className="flex__i--xs-12">
              <label className="spx-label">Search Label</label>
              <div className="spx-search">
                <input className="spx-input" type="search" value="search me" />
                <button className="spx-btn spx-btn--pr spx-btn--circle" data-icon="search"></button>
              </div>
            </div>
          </div>
        </form>

        {!loginOnly ? (
          <div>
            <button className="spx-btn spx-btn--pr">Option 1</button>
            <button className="spx-btn spx-btn--pr">Option 2</button>
            <button className="spx-btn spx-btn--pr">Option 3</button>
          </div>
        ) : null}
      </div>
    )
  }
}

export default Template02
