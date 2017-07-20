import React, {Component} from 'react'

export default class AppDemoContainer extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header' style={{ textAlign: 'center' }}>
          <h1 className>{this.props.title}</h1>
          <h2>
            {this.props.subtitle}
          </h2>
        </div>
        <div className='container-fluid'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
