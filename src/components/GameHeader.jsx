import { UseGameContext } from "../context/GameContext"
import SelectBtn from "./SelectBtn"


const GameHeader = () => {
    const {userScore,selectedNumber, setSelectedNumber, showError, setShowError,reloadSelectedBtns,} = UseGameContext()
    const onClickSelectBtnCont = (e)=>{
        let target = e.target;
        if(target.nodeName == 'BUTTON' && !selectedNumber.selected){
            setSelectedNumber({number: target.value, selected: true})
            target.style.background = "#000";
            target.style.color = "#fff";
            setShowError(false)
        }
    }
  return (
    <div className=" flex justify-between items-center gap-[1rem] max-md:flex-col ">
        <div className="max-md:self-start max-sm:self-center flex flex-col justify-center items-center">
            <span className=" font-[500] text-[10rem] leading-[15rem] ">{userScore}</span>
            <span className=" font-[500] text-[2.4rem] leading-[3.6rem]">Total Score</span>
        </div>
        <div>
            <div id="errorMsg" className=" font-[400] text-[2.4rem] leading-[3.6rem] text-red-600 text-right max-lg:text-center">
                {showError ? "You have not selected any number": ' '}
            </div>
            <div className=" flex gap-[1rem] flex-wrap" onClick={onClickSelectBtnCont}>
                {
                    [1,2,3,4,5,6].map((val)=>{
                        return (
                            <SelectBtn value={val} key={`SelectBtn${val}${reloadSelectedBtns}`} />
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default GameHeader
