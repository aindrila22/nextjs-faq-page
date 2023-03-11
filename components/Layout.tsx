import Image from 'next/image'
import React, { Dispatch, SetStateAction } from 'react'
import down from "../public/down.svg";
import Accordion from './Accordion';

type Props = {
    question :string,
    answer: string,
    idx: number
}

interface LayoutProps {
    handleClick: React.MouseEventHandler<HTMLButtonElement>,
    isSomeActive: any,
    turn: boolean[],
    setTurn: Dispatch<SetStateAction<boolean[]>>,
    data: Props[]
}

const Layout = ({handleClick, isSomeActive, data, turn, setTurn}:LayoutProps) => {
  return (
    <div className='items-center flex flex-col lg:w-7/12 lg:mt-7 w-full my-5 px-4'>
        <span className='text-3xl px-6 py-3 text-white rounded-md bg-gradient-to-r from-blue-700 to-sky-500'>
            Frequently Asked Questions
        </span>
      <div className='flex items-center justify-between w-full mb-6 lg:justify-end'>
          <button
              className="flex items-center mr-3 space-x-1 text-sm font-bold lg:text-base lg:space-x-2 py-2 px-4 bg-slate-50"
              onClick={handleClick}
            >
              <span className="text-sky-500 min-w-fit text-ellipsis"> {!isSomeActive ? "Open All" : "Close All"}</span>
              <div
                className={
                  "relative transition-all ease-in-out duration-200 " +
                  (isSomeActive ? " rotate-180" : "rotate-0")
                }
              >
               <Image src={down} alt="" width={40} height={40}/>
              </div>
            </button>
      </div>

      {data.map((el,i)=>{
        return (
            <div className='w-full' key={"questions"+i}>
                <Accordion
                question={el.question}
                answer={el.answer}
                turn={turn}
                setTurn={setTurn}
                idx={el.idx}
                />
            </div>
        )
      })}
    </div>
  )
}

export default Layout
