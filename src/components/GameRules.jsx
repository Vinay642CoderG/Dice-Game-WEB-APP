

const GameRules = () => {
  return (
    <div className="p-[1rem]">
      <h3 className="font-[700] text-[2.4rem] leading-[3.6rem] text-left mb-[1rem]">How to play dice game</h3>
      <ul className="font-[500] text-[1.6rem] leading-[2.4rem] list-none text-left">
        <li>Select any number</li>
        <li>Click on dice image</li>
        <li>after click on  dice  if selected number is equal to dice number you will get same point as dice </li>
        <li>if you get wrong guess then  2 point will be dedcuted </li>
      </ul>
    </div>
  )
}

export default GameRules
