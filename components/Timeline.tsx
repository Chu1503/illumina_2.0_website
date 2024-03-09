import React, { Fragment } from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Timeline({}: Props) {
    const events=[
        {
            heading:"OPENING CEREMONY",
            subHeading:"OPENING CEREMONY",
            date:"2ND JUNE 2023",
            timing:"10:30pm",
            direction:"right"
        },
        {
            heading:"SPEAKER SESSION",
            subHeading:"SPEAKER SESSION",
            date:"2ND JUNE 2023",
            timing:"10:30pm",
            direction:"left" 
        },
        {
            heading:"REVIEW 1",
            subHeading:"REVIEW 1",
            date:"2ND JUNE 2023",
            timing:"10:30pm",
            direction:"right"
        },
        {
            heading:"TRIVIA NIGHT",
            subHeading:"TRIVIA NIGHT",
            date:"2ND JUNE 2023",
            timing:"10:30pm",
            direction:"left" 
        },
        {
            heading:"REVIEW 2",
            subHeading:"REVIEW 2",
            date:"2ND JUNE 2023",
            timing:"10:30pm",
            direction:"right"
        },
        {
            heading:"REVIEW 3",
            subHeading:"REVIEW 3",
            date:"2ND JUNE 2023",
            timing:"10:30pm",
            direction:"left" 
        },
        {
          heading:"FINAL PITCHES",
          subHeading:"FINAL PITCHES",
          date:"2ND JUNE 2023",
          timing:"10:30pm",
          direction:"right"
      },
      ]
  const Circle=()=>{
    return (<div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-full w-4 h-4 mx-auto">

    </div>)
  }
  const Pillar=()=>{
    return (<div className="bg-gradient-to-b from-blue-500 to-teal-500 rounded-t-full rounded-b-full w-2 h-full mx-auto">

    </div>)
  }
  const EventCard=({heading,subHeading,timing,direction,date})=>{
    return(
      (direction==="left")?(
      <div className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl flex flex-row gap-x-2 border shadow-md rounded-xl p-4 items-center justify-center w-[100%]">
      <div className="flex flex-col gap-y-2p-4 w-[46%]">
      <div className="text-blue-800 font-bold text-lg">{date}</div>
        <div className="text-blue-800 font-bold text-lg">{timing}
        </div>
      </div>
      <div className="gap-y-2p-4 items-center w-[8%]">
        <div className="w-[1px] h-[100px] border"></div>
      </div>
      <div className="flex flex-col gap-y-2 shadow-md p-4 w-[46%]">
        <div className="text-blue-800 font-bold text-lg border-b">{heading}</div>
        <div className="text-sm text-gray-700">{subHeading}</div>
      </div>
      </div>):
      (
        <div className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl flex flex-row gap-x-2 border shadow-md rounded-xl p-4 items-center justify-center w-[100%]">
        <div className="flex flex-col gap-y-2 shadow-md p-4 w-[46%]">
          <div className="text-blue-800 font-bold text-lg border-b">{heading}</div>
          <div className="text-sm text-gray-700">{subHeading}</div>
        </div>
        <div className="gap-y-2p-4 items-center w-[8%]">
        <div className="w-[1px] h-[100px] border "></div>
      </div>
        <div className="flex flex-col gap-y-2p-4 w-[46%]">
          <div className="text-blue-800 font-bold text-lg">{date}
          <div className="text-blue-800 font-bold text-lg">{timing}</div>
          </div>
        </div>
        </div>
      )
    )
  }
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-auto text-center max-w-7xl p-10 justify-evenly mx-auto items-center"
    >
      <h2 className="p-10 uppercase tracking-[10px] sm:tracking-[20px] text-[rgba(1,205,250,255)] text-4xl sm:text-5xl">
        Timeline
      </h2>

      <motion.div
        initial={{
          x: 200,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        className="flex flex-col space-y-10 px-0 md:px-10"
      >
              <div className="flex flex-col gap-y-3 w-full my-4">
        <Circle/>
        {events.map((event,key)=>{
          return <Fragment key={key}>
            <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center w-[100%]">
              {event.direction ==='left'?(
                <EventCard heading={event.heading} subHeading={event.subHeading} timing={event.timing} direction={event.direction} date={event.date} />
              ):(
                <div>
                </div>
              )
            }
            <Pillar/>
            {event.direction ==='right'?(
                <EventCard heading={event.heading} subHeading={event.subHeading} timing={event.timing} direction={event.direction} date={event.date} />
              ):(
                <div>
                </div>
              )
            }
            </div>
            {key<(events.length-1)&&<Circle/>}
          </Fragment>
        })}

      </div>
      </motion.div>
    </motion.div>
  );
}
