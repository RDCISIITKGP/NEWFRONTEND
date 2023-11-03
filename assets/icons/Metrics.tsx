import clsx from "clsx"
import { memo } from "react"

interface Props {
  width: string
  height: string
  fill: string
}

const Metrics = ({ fill, height, width }: Props) => (
  <svg
    fill={fill}
    height={height}
    width={width}
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 458 458"
    className={clsx(`min-w-[${width}] min-h-[${height}]`)}
  >
    <path
      d="M412,0H46c-8.284,0-15,6.716-15,15v428c0,8.284,6.716,15,15,15h366c8.284,0,15-6.716,15-15V15C427,6.716,420.284,0,412,0z
M158.75,385.902c0,6.681-5.416,12.098-12.097,12.098h-40.138c-6.681,0-12.097-5.416-12.097-12.098v-95.805
c0-6.681,5.416-12.098,12.097-12.098h40.138c6.681,0,12.097,5.416,12.097,12.098V385.902z M261.167,385.902
c0,6.681-5.416,12.098-12.098,12.098h-40.138c-6.681,0-12.098-5.416-12.098-12.098V244.098c0-6.681,5.416-12.098,12.098-12.098
h40.138c6.681,0,12.098,5.416,12.098,12.098V385.902z M284.871,140.221c0,8.284-6.716,15-15,15c-8.284,0-15-6.716-15-15v-24.787
L116.735,253.569c-2.928,2.929-6.768,4.394-10.606,4.394c-3.839,0-7.677-1.464-10.606-4.394c-5.858-5.858-5.858-15.355,0-21.213
L233.659,94.221h-24.788c-8.284,0-15-6.716-15-15s6.716-15,15-15h61c8.284,0,15,6.716,15,15V140.221z M363.583,385.902
c0,6.681-5.416,12.098-12.098,12.098h-40.138c-6.681,0-12.097-5.416-12.097-12.098V182.936c0-6.681,5.416-12.098,12.097-12.098
h40.138c6.681,0,12.098,5.416,12.098,12.098V385.902z"
    />
  </svg>
)

export default memo(Metrics)