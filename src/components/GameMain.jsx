import { useState } from "react";
import { UseGameContext } from "../context/GameContext";
import Button from "./Button";
import GameRules from "./GameRules";

const GameMain = () => {
  const {
    showRules,
    setShowRules,
    setShowError,
    selectedNumber,
    setSelectedNumber,
    setReloadSelectedBtns,
    userScore,
    setUserScore, 
  } = UseGameContext();
  const [rolledDiceNumber, setRolledDiceNumber] = useState(1);

  const onShowRulesBtnClick = () => {
    setShowRules(!showRules);
  };
  const onResetScoreBtnClick = () => {
    setRolledDiceNumber(1);
    setUserScore(0);
    setSelectedNumber({ number: null, selected: false });
    setShowError(false);
    setReloadSelectedBtns(Math.random());
  };
  
  const onClickRollDice = () => {
    if (selectedNumber.selected) {
      let randDiceNum = Math.floor(Math.random() * (7 - 1) + 1);
      setRolledDiceNumber(randDiceNum);
      setUserScore(selectedNumber.number == randDiceNum? userScore + randDiceNum: userScore - 2);
      setReloadSelectedBtns(Math.random());
      setSelectedNumber({ number: null, selected: false });
    } else if (!selectedNumber.selected) {
      setShowError(true);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center gap-[2rem]">
      <div className=" max-w-[25rem] flex flex-col gap-[2rem] justify-center items-center">
        <img
          className=" max-w-[25rem] cursor-pointer"
          src={`dice_${rolledDiceNumber}.png`}
          alt={`dice ${rolledDiceNumber}`}
          onClick={onClickRollDice}
        />
        <span className=" font-[500] text-[2.4rem] leading-[3.6rem]">
          Click on Dice to roll
        </span>
        <Button
          text={"Reset Score"}
          customStylesClasses={
            "bg-white text-black hover:bg-black hover:text-white transition ease-out"
          }
          onClick={onResetScoreBtnClick}
        />
        <Button
          text={!showRules?"Show Rules":"Hide Rules"}
          customStylesClasses={
            "bg-black text-white hover:bg-white hover:text-black transition ease-out"
          }
          onClick={onShowRulesBtnClick}
        />
      </div>
      {showRules && <GameRules id="GameRulesCont" />}
    </div>
  );
};

export default GameMain;
