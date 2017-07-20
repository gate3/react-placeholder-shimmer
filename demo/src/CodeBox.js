import React, {Component} from 'react'

export default class CodeBox extends Component {
  render () {
    return (
      <div className='src-code'>
        <pre>
          {this.props.children}
        </pre>
      </div>
    )
  }
}
