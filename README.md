# react-placeholder-shimmer

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

## Synopsis
React PlaceHolder Shimmer is a Placeholder with the shimmer effect for your needs. Feel free to suggest new placeholder components or fork this repo and extend it. Thanks

## Code Example
Checkout the [Demo](https://octo.azurewebsites.net/doyin/react-placeholder-shimmer) for code examples or the view the [Api Here](https://gate3.github.io/react-placeholder-shimmer/).

## Installation

npm install --save simple-react-card

## API Reference
```jsx
import React, {Component} from 'react'
import {MediaBlock, Button, SquareImage, RoundImage, TextBlock} from '../../src'
export default class PlaceHolderExample extends Component {
  render () {
    return (
        <div>
            <MediaBlock>
              <RoundImage />
              <TextBlock textLines={[40, 50]} />
            </MediaBlock>
            <TextBlock textLines={[40, 50, 40]} />
            <Button width='20' centered/>
        </div>
    )
  }
```
### About the elements
The library currently contains three elements and one container. The elements are:
-RoundImage
-SquareImage
-TextBlock
-Button

while the container is:
-MediaBlock

MediaBlock is only used to align the Round or Square Image to the side of a text instead of below or above it. 

>You can extend the library and create your own placeholder elements by importing the shimmer css import './react-placeholder-shimmer/lib/css/Shimmer.css' and using the classes `shimmer-div shine-me` on your own element

###Api

##Button

| Property | Type | Description |
| --- | --- | --- |
| width | string | Width of the button in percent (%)|
| centered | boolean | Should the button be centered within the parent container |

##TextBlock

| Property | Type | Description |
| --- | --- | --- |
| textLines | arrayOf Integers | An array of integers containing the width in percentage (%) of each TextLine in the TextBlock |

## Contributors

You can report your [issues here](https://github.com/gate3/react-placeholder-shimmer/issues) or you can send me an email doyinolarewaju@gmail.com. I will be happy to help. Pull Requests are also welcome.

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
