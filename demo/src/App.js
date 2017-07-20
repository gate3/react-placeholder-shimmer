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
              <p>npm install react-placeholder-shimmer --save</p>
            </div>
          </section>

          <section className='col-xs-12 no-padding'>
            <h1 className='section-title'>Usage</h1>
          </section>

          <div className='col-xs-12 src-code' style={{ textAlign: 'left' }}>
            You can use the elements individually or you can combine them using maybe a card. You can check out simple-react-card as a placeholder container.
          </div>
          <h1> Media Block with image and text </h1>

          <div className='row'>
            <div className='col-xs-12 src-code'>
              <pre>
                {'import {MediaBlock, TextBlock} from "simple-react-card";'}
                <br />
                {'class PlaceHolderExample extends React.Component {'}
                <br />
                {'    render() {                           '}
                <br />
                {'    return <div>'}
                <br />
                {'      <div className="col-xs-5 src-code" style={{ margin: "0px 5px 30px" }}>'}
                <br />
                {'        <MediaBlock> <RoundImage /> <TextBlock textLines={[40, 50]} /> </MediaBlock>'}
                <br />
                {'        <TextBlock textLines={[80, 90, 70]} />'}
                <br />
                {'        <Button centered />'}
                <br />
                {'      </div>'}
                <br />
                {'      <div className="col-xs-5 src-code" style={{ margin: "0px 5px 30px" }}>'}
                <br />
                {'        <SquareImage />'}
                <br />
                {'        <TextBlock textLines={[80, 90, 70]} />'}
                <br />
                {'        <Button centered width="30" />'}
                <br />
                {'      </div>'}
                <br />
                {'    </div>'}
                <br />
                {''}
                <br />
                {'    }' }
                <br />
                    }
              </pre>
            </div>
          </div>

          <div className='row'>
            <div className='col-xs-5 src-code' style={{ margin: '0px 5px 30px' }}>
              <MediaBlock>
                <RoundImage />
                <TextBlock textLines={[40, 50]} />
              </MediaBlock>
              <TextBlock textLines={[80, 90, 70]} />
              <Button centered />
            </div>
            <div className='col-xs-5 src-code' style={{ margin: '0px 5px 30px' }}>
              <div>
                <SquareImage />
              </div>
              <TextBlock textLines={[80, 90, 70]} />
              <Button centered width='30' />

            </div>
          </div>
        </div>

      </AppDemoContainer>
    )
  }
}

export default App
