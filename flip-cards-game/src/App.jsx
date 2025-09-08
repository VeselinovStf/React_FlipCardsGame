import { useEffect, useState } from "react";
import CardsGrid from "./components/CardsGrid";
import NewGameButton from "./components/NewGameButton";

import Score from "./components/Score";
import Title from "./components/Title";

const totalCards = 16;
const defaultCards = Array.from(Array(totalCards), (_, index) => {
  return {
    id: index + 1,
    image: `./${(index + 1) % 8}.png`,
    isFlipped: false,
    value: (index + 1) % 8,
    isMatched: false
  }
})

const App = () => {
  const shufleCards = () => {
    const array = defaultCards;

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  const [score, setScore] = useState(0);
  const [cards, setCards] = useState(shufleCards);

  const handleNewGame = () => {
    setScore(0);
    setCards(() => shufleCards())
  }

  const handleCardRotation = (cardToFlip) => {
    setCards((prevCards) => {
      // Get currently flipped but not matched cards
      const flippedCards = prevCards.filter((c) => c.isFlipped && !c.isMatched);

      // Validation: if 2 are already flipped, don't flip more
      if (flippedCards.length >= 2) return prevCards;

      return prevCards.map((card) => {
        if (card.id === cardToFlip.id) {
          // Prevent flipping the same card twice
          if (card.isFlipped) return card;

          return { ...card, isFlipped: true }; // flip new card
        }
        return card;
      });
    });
  };

  useEffect(() => {
    const flippedCards = cards.filter((c) => c.isFlipped && !c.isMatched);

    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;

      if (first.value === second.value) {
        // It's a match → mark them
        setCards((prev) => {
          return prev.map((c) => {
            if (c.id === first.id || c.id === second.id){
              setScore((prevScore) => score + 1)

              return { ...c, isMatched: true }
            }

            return c
          }
          )
        }
          
        );
      } else {
        // Not a match → flip back after delay
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              c.id === first.id || c.id === second.id
                ? { ...c, isFlipped: false }
                : c
            )
          );
        }, 1000);
      }
    }
  }, [cards]);

  return (
    <>
      <div className="container mx-auto px-4 py-4 text-center">
        <Title text="React Flip Cards Game" />
        <NewGameButton handleNewGame={handleNewGame} />
        <CardsGrid cards={cards} handleCardRotation={handleCardRotation} />
        <Score score={score} />
      </div>
    </>
  )
}

export default App
