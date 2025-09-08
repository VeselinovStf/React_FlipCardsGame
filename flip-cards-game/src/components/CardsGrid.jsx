import React from 'react'
import Card from "./Card";

const CardsGrid = ({ cards, handleCardRotation }) => {
  return (
      <div className="grid grid-cols-4 gap-1 mb-5">
        { 
            cards.map((c) =>
                (
                    <React.Fragment key={c.id}>
                        <Card card={c} onClick={handleCardRotation}/>
                    </React.Fragment>
                )
            )
        }
      </div>
  )
}

export default CardsGrid