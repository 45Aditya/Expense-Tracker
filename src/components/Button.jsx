import React from 'react'

function Button({
    btnText ,
    type = 'button',
    classname = '',
    ...props
}) {
  return (
    <button className={`${classname}`} {...props}>
        {btnText}
    </button>
  )
}

export default Button