import GameHeader from "./GameHeader"
import GameMain from "./GameMain"


const GameplayPage = () => {
  return (
    <div className=" max-w-[1400px] m-auto p-[1rem] pl-[2rem] pr-[2rem] max-sm:pr-[1rem]">
      <GameHeader />
      <GameMain />
    </div>
  )
}

export default GameplayPage
