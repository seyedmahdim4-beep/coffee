import React from 'react'

function Overlay({ open, onClose }) {
  return (
    <div
      onClick={onClose}
      className={`
        fixed inset-0
        bg-black/40
        z-10
        transition-opacity
        duration-500
        ${open
          ? 'opacity-100 visible'
          : 'opacity-0 invisible pointer-events-none'
        }
      `}
    />
  )
}

export default Overlay