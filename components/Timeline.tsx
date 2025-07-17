"use client";
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
    timing: "8:00 AM",
    direction: "right",
  },
  {
    heading: "SPEAKER SESSION",
    date: "18th March",
    timing: "3:00 PM",
    direction: "left",
  },
  {
    heading: "REVIEW 1",
    date: "18th March",
    timing: "10:30 PM",
    direction: "right",
  },
  {
    heading: "TRIVIA NIGHT",
    date: "19th March",
    timing: "12:00 AM",
    direction: "left",
  },
  {
    heading: "REVIEW 2",
    date: "19th March",
    timing: "10:00 AM",
    direction: "right",
  },
  {
    heading: "REVIEW 3",
    date: "19th March",
    timing: "2:00 PM",
    direction: "left",
  },
  {
    heading: "FINAL PITCHES",
    date: "19th March",
    timing: "5:30 PM",
    direction: "right",
  },
  {
    heading: "RESULTS DECLARATION",
    date: "19th March",
    timing: "6:30 PM IST",
    direction: "left",
  },
];

const Circle = () => {
  return (
    <div className="bg-white rounded-full w-3 h-3 sm:mx-auto ml-[-5px] border-none"></div>
  );
};

const Pillar = () => {
  return (
    <div className="bg-white w-0.5 h-full sm:h-28 sm:mx-auto border-none"></div>
  );
};

const EventCard = ({ heading, timing, direction, date }: Event) => {
  return (
    <div className="relative w-[90vw] sm:w-[26vw]">
      <div className="absolute left-1/2 top-0 h-full flex flex-col items-center -translate-x-1/2 z-[-1]">
        <div className="w-[2px] h-full bg-white" />
        <div className="w-2 h-2 rounded-full bg-white absolute top-1" />
      </div>

      <div className="flex items-center bg-[#1a1a1a] backdrop-filter backdrop-blur-lg justify-between transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl shadow-md rounded-xl p-5 border-b-[4px] border-[#01cdfa] overflow-hidden">
        {direction === "left" ? (
          <div className="flex flex-row w-full items-stretch">
            <div className="w-1/2 flex flex-col justify-center items-center px-2">
              <div className="text-center font-semibold uppercase text-lg text-white break-words">{date}</div>
              <div className="text-center font-semibold uppercase text-lg text-white break-words">{timing}</div>
            </div>

            <div className="w-[1px] bg-white opacity-30 mx-2" />

            <div className="w-1/2 flex flex-col justify-center items-center px-2">
              <div className="text-center text-[rgba(1,205,250,255)] font-semibold text-2xl break-words">
                {heading}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-row w-full items-stretch">
            <div className="w-1/2 flex flex-col justify-center items-center px-2">
              <div className="text-center text-[rgba(1,205,250,255)] font-semibold text-2xl break-words">
                {heading}
              </div>
            </div>

            <div className="w-[1px] bg-white opacity-30 mx-2" />

            <div className="w-1/2 flex flex-col justify-center items-center px-2">
              <div className="text-center font-semibold uppercase text-lg text-white break-words">{date}</div>
              <div className="text-center font-semibold uppercase text-lg text-white break-words">{timing}</div>
            </div>
          </div>
        )}
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
      <h2 className="p-10 uppercase tracking-[10px] sm:tracking-[20px] text-[rgba(1,205,250,255)] text-4xl sm:text-5xl font-semibold">
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
          <Circle />
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
