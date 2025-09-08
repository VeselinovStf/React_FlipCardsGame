import React from 'react'

const Score = ({ score }) => {
  return (
      <div className="mt-5 mb-5 text-center">
          <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-dark">
              Score: 
              <span className="text-blue-600 dark:text-blue-500"> {score}</span>
          </h1>
      </div>
  )
}

export default Score