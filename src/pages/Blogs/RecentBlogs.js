import React, { useState } from 'react';
import Card from './Card';
import { initalState } from './testData';

function RecentBlogs() {
  const [cards, setCards] = useState(initalState);

  const handleRightClick = () => {
    const prevState = [...cards];
    // find next inactive card index - top
    const nextCardIdx = prevState
      .filter((ft) => ft.active === true)
      .sort((a, b) => {
        if (a.pos > b.pos) {
          return 1;
        }
        return -1;
      })[0].idx;
    // reset
    prevState.find((f) => f.active === false).active = true;
    // update
    prevState.find((f) => f.idx === nextCardIdx).active = false;
    // maximize pos
    prevState.find((f) => f.idx === nextCardIdx).pos =
      Math.max.apply(
        null,
        prevState.map((o) => {
          return o.pos;
        })
      ) + 1;

    // update state
    setCards(prevState);
  };

  const handleLeftClick = () => {
    const prevState = [...cards];
    // find next inactive card index - bottom
    const nextCardIdx = prevState
      .filter((ft) => ft.active === true)
      .sort((a, b) => {
        if (a.pos > b.pos) {
          return 1;
        }
        return -1;
      })

      .pop(1).idx;
    // minimize pos
    prevState.find((f) => f.active === false).pos =
      Math.min.apply(
        null,
        prevState.map((o) => {
          return o.pos;
        })
      ) - 1;
    // reset
    prevState.find((f) => f.active === false).active = true;
    // update
    prevState.find((f) => f.idx === nextCardIdx).active = false;

    // update state
    setCards(prevState);
  };

  return (
    <div className="flex flex-col md:flex-row place-content-center mb-4 ">
      <button
        type="button"
        className="text-xl md:text-5xl cursor-pointer border-2 pb-2 px-5 border-black rounded-md h-1/2 my-10 md:mr-4 mx-36 md:mx-0"
        onClick={() => handleLeftClick()}
      >
        &#8249;
      </button>
      <div className="flex-col flex md:flex-row gap-2 sm:gap-4 place-items-center">
        {cards
          .filter((f) => f.active === true)
          .sort((a, b) => {
            if (a.pos > b.pos) {
              return 1;
            }
            return -1;
          })

          .map((card) => (
            <Card key={card.idx} image={card.image} title={card.text} />
          ))}
      </div>
      <button
        type="button"
        className="text-xl md:text-5xl hover:cursor-pointer border-2 pb-2 px-5 border-black rounded-md h-1/2 my-10 md:ml-4 mx-36 md:mx-0"
        onClick={() => handleRightClick()}
      >
        &#8250;
      </button>
    </div>
  );
}

export default RecentBlogs;
