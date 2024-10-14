"use client";
import { useEffect, useState } from "react";

interface TimeCount {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}
const getTimeLeft = (expiry: string): TimeCount => {
  let days = "0";
  let hours = "0";
  let minutes = "0";
  let seconds = "0";

  const difference = new Date(expiry).getTime() - new Date().getTime();

  if (difference <= 0) {
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  const dys = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const mnt = Math.floor((difference / (1000 * 60)) % 60);
  const snd = Math.floor((difference / 1000) % 60);

  days = dys < 10 ? `0${dys}` : dys.toString();
  hours = hrs < 10 ? `0${hrs}` : hrs.toString();
  minutes = mnt < 10 ? `0${mnt}` : mnt.toString();
  seconds = snd < 10 ? `0${snd}` : snd.toString();

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

const CountDown = ({ launchDate }: { launchDate: string }) => {
  const [timeLeft, setTimeLeft] = useState<TimeCount>(getTimeLeft(launchDate));

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(launchDate));
    }, 1000);
  }, [launchDate]);

  return (
    <div className="h-[10rem] mb-20 bg-black">
      <div className="flex flex-col justify-center items-center text-yellow-400 text-2xl md:text-4xl font-bold fon">
        EVENT COUNTDOWN
      </div>
      <div className="flex justify-center mt-10 gap-3 ">
        <span className="flex flex-col justify-center p-6 text-center bg-black text-yellow-400 text-2xl md:text-5xl  w-36 shadow-lg rounded">
          {timeLeft.days}
          <small className="text-sm uppercase font-semibold text-yellow-400 ">
            Days
          </small>
        </span>
        <span className="flex flex-col justify-center text-center bg-black text-yellow-400 text-2xl md:text-5xl w-36 shadow-sm rounded">
          {timeLeft.hours}
          <small className="text-sm uppercase font-semibold text-yellow-400">
            Hours
          </small>
        </span>
        <span className="flex flex-col justify-center text-center bg-black text-yellow-400 text-2xl md:text-5xl w-36 shadow-lg rounded">
          {timeLeft.minutes}
          <small className="text-sm uppercase font-semibold text-yellow-400">
            Minutes
          </small>
        </span>
        <span className="flex flex-col justify-center text-center bg-black text-yellow-400 text-2xl md:text-5xl w-36 shadow-lg rounded-md">
          {timeLeft.seconds}
          <small className="text-sm uppercase font-semibold text-yellow-400">
            Seconds
          </small>
        </span>
        <small></small>
      </div>
    </div>
  );
};

export default CountDown;
