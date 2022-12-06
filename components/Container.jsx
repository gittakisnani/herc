import React from 'react'

const Container = ({ children, className }) => {
  return (
    <div className={'px-10 w-full max-w-7xl mx-auto ' + className}>
        {children}
    </div>
  )
}

export default Container