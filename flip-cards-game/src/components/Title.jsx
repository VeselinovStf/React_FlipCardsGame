import React from 'react'

const Title = ({ text }) => {
  return (
      <div className="mt-5 mb-5">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-dark">{text}</h1>
      </div>
  )
}

export default Title