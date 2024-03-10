import React, { Fragment } from "react";
import { motion } from "framer-motion";

type Event = {
  heading: string;
  date: string;
  timing: string;
  direction: "left" | "right";
};

const events: Event[] = [
  {
    heading: "OPENING CEREMONY",
    date: "18th March",
    timing: "8 AM",
    direction: "right",
  },
  {
    heading: "GUEST SPEAKER",
    date: "18th March",
    timing: "3 PM",
    direction: "left",
  },
  {
    heading: "FUN NIGHT",
    date: "18th March",
    timing: "11 PM",
    direction: "right",
  },
  {
    heading: "FACULTY REVIEW 1",
    date: "19th March",
    timing: "8 AM",
    direction: "left",
  },
  {
    heading: "FACULTY REVIEW 2",
    date: "19th March",
    timing: "6 PM",
    direction: "right",
  },
  {
    heading: "TRIVIA NIGHT",
    date: "19th March",
    timing: "11 PM",
    direction: "left",
  },
  {
    heading: "FINAL REVIEW",
    date: "20th March",
    timing: "4 AM",
    direction: "right",
  },
  {
    heading: "RESULTS DECLARATION",
    date: "20th March",
    timing: "8 AM",
    direction: "left",
  },
];

const Circle = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-full w-4 h-4 sm:mx-auto ml-[-3px]"></div>
  );
};

const Pillar = () => {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-teal-500 rounded-t-full rounded-b-full w-2 h-full sm:mx-auto"></div>
  );
};

const EventCard = ({ heading, timing, direction, date }: Event) => {
  return direction === "left" ? (
    <div className="flex items-center justify-between transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl border shadow-md rounded-xl p-5">
      <div className="flex flex-col items-center justify-center">
        <div className="text-white text-center text-xs md:text-base">
          {date}
        </div>
        <div className="text-white text-center text-xs md:text-base">
          {timing}
        </div>
      </div>
      <div className="flex items-center">
        <div className="w-[1px] h-[100px] border"></div>
      </div>
      <div className="flex flex-col items-center justify-center shadow-md">
        <div className="text-[rgba(1,205,250,255)] text-xs md:text-base">
          {heading}
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-between transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl border shadow-md rounded-xl p-5">
      <div className="flex flex-col items-center justify-center">
        <div className="text-[rgba(1,205,250,255)] text-xs md:text-base">
          {heading}
        </div>
      </div>
      <div className="flex items-center">
        <div className="w-[1px] h-[100px] border"></div>
      </div>
      <div className="flex flex-col items-center justify-center shadow-md">
        <div className="text-white text-center text-xs md:text-base">
          {date}
        </div>
        <div className="text-white text-center text-xs md:text-base">
          {timing}
        </div>
      </div>
    </div>
  );
};

export default function Timeline() {
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
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once: true }}
        className="flex flex-col space-y-10 px-0 md:px-10"
      >
        
        <div className="flex flex-col gap-y-3 w-full my-4 hidden md:block">
          <Circle />
          {events.map((event, key) => {
            return (
              <Fragment key={key}>
                <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center w-[100%]">
                  {event.direction === "left" ? (
                    <EventCard
                      heading={event.heading}
                      timing={event.timing}
                      direction={event.direction}
                      date={event.date}
                    />
                  ) : (
                    <div></div>
                  )}
                  <Pillar />
                  {event.direction === "right" ? (
                    <EventCard
                      heading={event.heading}
                      timing={event.timing}
                      direction={event.direction}
                      date={event.date}
                    />
                  ) : (
                    <div></div>
                  )}
                </div>
                {key < events.length - 1 && <Circle />}
              </Fragment>
            );
          })}
        </div>
        <div className="flex flex-col gap-y-3 w-full my-4 block md:hidden">
          <Circle/>
          {events.map((event, key) => {
            return (
              <Fragment key={key}>
                <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 w-[100%]">
                  <Pillar />
                    <EventCard
                      heading={event.heading}
                      timing={event.timing}
                      direction="right"
                      date={event.date}
                    />
                </div>
                {key < events.length - 1 && <Circle />}
              </Fragment>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}
