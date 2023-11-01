import { UseGameContext } from "../context/GameContext"
import Button from "./Button"


const StartingPage = () => {
    const {setIsGameStart} = UseGameContext()
    const onPlayNowBtnClick = ()=>{
        setIsGameStart(true);
    }
  return (
    <div className=" flex justify-center items-center h-[100vh]">
      <div className="flex justify-center max-sm:flex-col max-sm:items-center">
        <img className=" w-[50%] h-auto max-[616px]:w-[70%]" src="dices.png" alt="dices" />
        <div className=" flex flex-col justify-center items-end max-sm:items-center">
            <h1 className=" text-[9.6rem] max-xl:text-[5rem] max-md:text-[4rem] font-[700] leading-[14.4rem]">DICE GAME</h1>
            {/* play now btn  */}
            <Button text={"Play Now"} customStylesClasses={"bg-black text-white hover:bg-white hover:text-black transition ease-out"} onClick={onPlayNowBtnClick} />
        </div>
      </div>
    </div>
  )
}

export default StartingPage
