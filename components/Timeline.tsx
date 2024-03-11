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
    heading: "FACULTY REVIEW",
    date: "19th March",
    timing: "8 AM",
    direction: "left",
  },
  {
    heading: "FACULTY REVIEW",
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
    <div className="w-[70vw] sm:w-[20vw]">
      {" "}
      <div className="flex items-center bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 justify-between transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl shadow-md rounded-xl p-5 border-[rgba(1,205,250,255)] border-solid border-b-[3px]">
        {direction === "left" ? (
          <>
            <div className="flex flex-row w-[70vw] sm:w-[20vw]">
              <div className="w-1/2 flex flex-col justify-center items-center">
                <div className="tex-center">{date}</div>
                <div className="text-center">{timing}</div>
              </div>
              <div className="w-1/2 flex flex-col justify-center items-center">
                <div className="text-center text-[rgba(1,205,250,255)]">
                  {heading}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-row w-[70vw] sm:w-[20vw]">
              <div className="w-1/2 flex flex-col justify-center items-center">
                <div className="text-center text-[rgba(1,205,250,255)]">
                  {heading}
                </div>
              </div>
              <div className="w-1/2 flex flex-col justify-center items-center">
                <div className="tex-center">{date}</div>
                <div className="text-center">{timing}</div>
              </div>
            </div>
          </>
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
