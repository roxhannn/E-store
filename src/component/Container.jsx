import React from 'react'

export default function Container({className, children }) {
  return (
    <div className=  {` max-w-[1300px] mx-auto ${className} p-5 ` } >
        {children}
    </div>
  )
}
