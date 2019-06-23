import React, { Component } from 'react'
import { Template01 } from '../templates/template_01'
import { Template02 } from '../templates/template_02'
import { Template03 } from '../templates/template_03'

export class TemplateDisplay extends Component {
  handleTemplate = () => {
    const { whichTemplate, loginOnly, appName } = this.props

    if (whichTemplate === '01') {
      return <Template03 loginOnly={loginOnly} appName={appName} />
      // return <Template01 loginOnly={loginOnly} appName={appName} />
    } else if (whichTemplate === '03') {
      return <Template03 loginOnly={loginOnly} appName={appName} />
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
