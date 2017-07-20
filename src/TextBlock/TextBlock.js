import React,{Component} from 'react'
import './TextBlock.css'
import PropTypes from 'prop-types'

class TextBlock extends Component {

  renderTextLines(){
    try{
      let txt = []
      if(this.props.textLines != null){
        let v = this.props.textLines
        for(let i=0;i < v.length; i++){
          txt.push(<div className="text-row shimmer-div shine-me text-line"
            style={{ width: v[i]+'%' }} key={i}>
        </div>)
        }
        return txt
      }
    }catch(e){
      throw e;
    }
    return null
  }

  render = () => (
    <div className="text-block shimmer-div" style={{ width: '100%' }}>
          {this.renderTextLines()}
    </div>  
  )
}

TextBlock.PropTypes = {
  textLines: PropTypes.arrayOf(PropTypes.number).isRequired
}

export default TextBlock
