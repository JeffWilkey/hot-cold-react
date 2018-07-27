import React from 'react';

import './button.css'

export default function Button(props) {
  return (
    <button className="button" style={props.customStyle} onClick={props.onClick}>{props.text}</button>
  )
}
