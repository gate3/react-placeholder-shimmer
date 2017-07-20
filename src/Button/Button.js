import React,{Component} from 'react';
import './Button.css';
import PropTypes from 'prop-types';

class Button extends Component {
  render = () => (
   <div style={{width: this.props.width +'%'}}
    className={"text-row shimmer-div shine-me shimmer-button "+(this.props.centered?'centered':'')}>
   </div>
  )
}

Button.PropTypes = {
  width: PropTypes.number,
  centered: PropTypes.bool
}

export default Button
