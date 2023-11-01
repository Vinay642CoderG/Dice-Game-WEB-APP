

const SelectBtn = ({value}) => {
  return (
    <button className=" border-[1px] border-black w-[7.2rem] h-[7.2rem] inline-block font-[700] text-[2.4rem] leading-[3.6rem] text-center hover:text-white hover:bg-black transition-colors ease-out" value={`${value}`}>{value}</button>
  )
}

export default SelectBtn
