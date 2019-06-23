import React, { Component } from 'react'
import { Template01 } from '../templates/template_01'
import { Template02 } from '../templates/template_02'

export class TemplateDisplay extends Component {
  handleTemplate = () => {
    const { whichTemplate, loginOnly, appName } = this.props

    if (whichTemplate === '01') {
      return <Template01 loginOnly={loginOnly} appName={appName} />
    } else {
      return <Template02 loginOnly={loginOnly} appName={appName} />
    }
  }

  render () {
    return (
      <div>
        {this.handleTemplate()}
      </div>
    )
  }
}

export default TemplateDisplay
