import { SvgProps } from "@/constant/SvgProps"

function Mail({
  width = "20",
  height = "20",
  viewBox = "0 0 20 20",
  fill = "none",
  stroke = "#8BAC3E"
}: SvgProps) {
  return (
    <svg width={width} height={height} viewBox={viewBox} fill={fill} xmlns="http://www.w3.org/2000/svg">
      <g id="mail">
        <path id="Vector" d="M2.5 6.66675L9.075 11.0501C9.34888 11.2328 9.67075 11.3303 10 11.3303C10.3292 11.3303 10.6511 11.2328 10.925 11.0501L17.5 6.66675M4.16667 15.8334H15.8333C16.2754 15.8334 16.6993 15.6578 17.0118 15.3453C17.3244 15.0327 17.5 14.6088 17.5 14.1667V5.83341C17.5 5.39139 17.3244 4.96746 17.0118 4.6549C16.6993 4.34234 16.2754 4.16675 15.8333 4.16675H4.16667C3.72464 4.16675 3.30072 4.34234 2.98816 4.6549C2.67559 4.96746 2.5 5.39139 2.5 5.83341V14.1667C2.5 14.6088 2.67559 15.0327 2.98816 15.3453C3.30072 15.6578 3.72464 15.8334 4.16667 15.8334Z" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>

  )
}

export default Mail