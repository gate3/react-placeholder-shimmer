import React,{Component} from 'react'
import './MediaBlock.css'
class MediaBlock extends Component {
  render = () => (
    <div className="media-block shimmer-div media-block-div">
      {this.props.children}
    </div>
  )
}

export default MediaBlock
