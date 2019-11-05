import React from 'react'

export default (props) => props.disabled ?
  (
    <span className={props.className + " " + (props.disabled && "disabled")}>
      {props.children}
    </span>
  )
  :
  (
    <a
      className={props.className}
      href={props.to}
      target={props.newTab ? "_blank" : ""}
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  )