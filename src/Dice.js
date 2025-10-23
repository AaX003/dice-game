import React, {useState, useEffect } from "react";
import "./Dice.css";

import diceFaceOne from "./images/dice-face-one.png";
import diceFaceTwo from "./images/dice-face-two.png";
import diceFaceThree from "./images/dice-face-three.png";
import diceFaceFour from "./images/dice-face-four.png";
import diceFaceFive from "./images/dice-face-five.png";
import diceFaceSix from "./images/dice-face-six.png";

function Dice() {

  const [diceFaces, setDiceFaces] = useState([]);
	const [firstDice, setFirstDice] = useState(diceFaceOne);
  const [secondDice, setSecondDice] = useState(diceFaceFive);
  const [shuffling, setShuffling] = useState(false);

  const [rolls, setRolls] = useState(0);

  useEffect(() => {
    setDiceFaces([diceFaceOne, diceFaceTwo, diceFaceThree, diceFaceFour,
                      diceFaceFive, diceFaceSix]);
  }, []);
  

  const generateDice = () => {
    if (shuffling) return;

    setShuffling(true);
    let numOfShuffles = 0;

    const totalNumOfShuffles = 15;
    
    const shuffleInterval = setInterval(() => {
      const rand1 = diceFaces[Math.floor(Math.random() * diceFaces.length)];
      const rand2 = diceFaces[Math.floor(Math.random() * diceFaces.length)];

      setFirstDice(rand1);
      setSecondDice(rand2);
      
      numOfShuffles++;

      if (numOfShuffles >= totalNumOfShuffles) {
        clearInterval(shuffleInterval);
        setShuffling(false);
       
        setRolls((prev => prev + 1));
      }

      
    }, 80);
  };

  return (
    <div className="container">

      <div className="dice-container">
        <img src={firstDice} alt="dice-one" height="250" width="250" />
         <img src={secondDice} alt="dice-two" height="250" width="250" />
      </div>

      <div className="button-container">
        <button className="generate-btn" onClick={generateDice} disabled={shuffling === true}>
          Generate
        </button>
      </div>

      <div className="stats-container">
        <p className="total-count">
         Total Rolls: {rolls}
        </p>
      </div>

    </div>
  );
}

export default Dice;
