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
    heading: "TITLE",
    date: "DATE",
    timing: "TIME",
    direction: "right",
  },
  {
    heading: "TITLE",
    date: "DATE",
    timing: "TIME",
    direction: "left",
  },
  {
    heading: "TITLE",
    date: "DATE",
    timing: "TIME",
    direction: "right",
  },
  {
    heading: "TITLE",
    date: "DATE",
    timing: "TIME",
    direction: "left",
  },
  {
    heading: "TITLE",
    date: "DATE",
    timing: "TIME",
    direction: "right",
  },
  {
    heading: "TITLE",
    date: "DATE",
    timing: "TIME",
    direction: "left",
  },
  {
    heading: "TITLE",
    date: "DATE",
    timing: "TIME",
    direction: "right",
  },
  {
    heading: "TITLE",
    date: "DATE",
    timing: "TIME",
    direction: "left",
  },
  {
    heading: "TITLE",
    date: "DATE",
    timing: "TIME",
    direction: "right",
  },
];

const Circle = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-full w-4 h-4 mx-auto"></div>
  );
};

const Pillar = () => {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-teal-500 rounded-t-full rounded-b-full w-2 h-full mx-auto"></div>
  );
};

const EventCard = ({ heading, timing, direction, date }: Event) => {
  return direction === "left" ? (
    <div className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl flex flex-row gap-x-2 border shadow-md rounded-xl p-4 items-center justify-center w-auto">
      <div className="flex flex-col w-auto">
        <div className="text-white text-xs md:text-base">{date}</div>
        <div className="text-white text-xs md:text-base">{timing}</div>
      </div>
      <div className="items-center w-auto">
        <div className="w-[1px] h-[100px] border"></div>
      </div>
      <div className="flex flex-col shadow-md w-auto">
        <div className="text-[rgba(1,205,250,255)] text-xs md:text-base">
          {heading}
        </div>
      </div>
    </div>
  ) : (
    <div className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl flex flex-row gap-x-2 border shadow-md rounded-xl p-4 items-center justify-center w-auto">
      <div className="flex flex-col w-auto">
        <div className="text-[rgba(1,205,250,255)] text-xs md:text-base">
          {heading}
        </div>
      </div>
      <div className="items-center w-auto">
        <div className="w-[1px] h-[100px] border"></div>
      </div>
      <div className="flex flex-col shadow-md w-auto">
        <div className="text-white text-xs md:text-base">{date}</div>
        <div className="text-white text-xs md:text-base">{timing}</div>
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
        <div className="flex flex-col gap-y-3 w-full my-4">
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
      </motion.div>
    </motion.div>
  );
}
