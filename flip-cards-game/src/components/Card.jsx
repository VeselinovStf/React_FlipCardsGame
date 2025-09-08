import React from 'react'

const Card = ({ card, onClick }) => {

  return (
      <div onClick={() => onClick(card)}
          className={`group w-64 h-64 [perspective:500px] cursor-pointer ${card.isFlipped ? "flipped" : ""}`}
      >
          <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-[.flipped]:[transform:rotateY(180deg)]">

              {/* Front */}
              <div className="absolute w-full h-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 [backface-visibility:hidden]">
                
                 
              </div>

              {/* Back */}
              <div className="absolute w-full h-full bg-gray-100 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600 flex items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <img className="rounded-t-lg" src={card.image} alt="" />
              </div>
          </div>
      </div>
  )
}

export default Card