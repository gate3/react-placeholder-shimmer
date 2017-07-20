import expect from 'expect'
import React from 'react'
// import {render, unmountComponentAtNode} from 'react-dom'
import {renderToStaticMarkup as render} from 'react-dom/server'
import {TextBlock} from 'src/'

/* describe('TextBlock', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('renders a block of textlines of type div', () => {
    render(<Component/>, node, () => {
      expect(node.innerHTML).toContain('Welcome to React components')
    })
  })
}) */

describe('TextBlock', () => {
  it('renders a block of textlines of type div', () => {
    expect(render(<TextBlock textLines={[40, 50]} />))
      .toContain(
      '<div class="text-block shimmer-div" style="width: 100%;"><div class="text-row shimmer-div shine-me text-line" style="width: 40%;"></div><div class="text-row shimmer-div shine-me text-line" style="width: 50%;"></div></div>')
  })
})
