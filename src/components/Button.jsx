

const Button = ({text, customStylesClasses, onClick}) => {
  return (
    <button className={`w-[22rem] h-[4rem] flex justify-center items-center p-[1rem] pl-[1.8rem] pr-[1.8rem] rounded-[5px] text-[1.6rem] leading-[2.4rem] font-[600] border-[1px] border-black `+` ${customStylesClasses} `} onClick={onClick} >
        {text}
    </button>
  )
}

export default Button
