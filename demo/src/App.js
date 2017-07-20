import React, { Component } from 'react'
import './App.css'
import AppDemoContainer from './AppDemoContainer'
import {MediaBlock, Button, SquareImage, RoundImage, TextBlock} from '../../src'
import '../../src/css/bootstrap.min.css'

class App extends Component {
  render () {
    return (
      <AppDemoContainer
        title='React PlaceHolder Shimmer'
        subtitle='Placeholder with the shimmer effect for your needs'>

        <div className='col-lg-10 col-xs-12 main-container no-padding'>

          <section className='col-xs-12 no-padding'>
            <h1 className='section-title'>Installation</h1>
            <div className='src-code'>
              <p>npm install simple-react-card --save</p>
            </div>
          </section>

          <section className='col-xs-12 no-padding'>
            <h1 className='section-title'>Usage</h1>
          </section>

          <div className='col-xs-12 src-code'>
            <MediaBlock>
              <RoundImage />
              <TextBlock textLines={[40, 50]} />
            </MediaBlock>
            <TextBlock textLines={[40, 50, 40]} />
            <Button width='20' />
          </div>
        </div>

      </AppDemoContainer>
    )
  }
}

export default App
