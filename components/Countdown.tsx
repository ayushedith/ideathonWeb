import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +targetDate - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!timer) {
      setTimer(setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000));
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [timer]);

  return (
    <div className="items-center justify-center grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
      <div className="items-center justify-cente w-full flex flex-col max-sm:gap-y-3 max-sm:p-4 *: bg-blue-10 border-4 border-blue-10 rounded-2xl shadow-[8px_8px_0px_0px_rgba(217,95,138,1)] max-sm:shadow-[4px_4px_0px_0px_rgba(217,95,138,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-200">
        <h1 className="text-2xl text-purple">
          see you at HACKTHEVISION 2K25 in
        </h1>
        <div className="text-4xl font-mono">
          <span>{timeLeft.days || "0"}d </span>
          <span>{timeLeft.hours || "0"}h </span>
          <span>{timeLeft.minutes || "0"}m </span>
          <span>{timeLeft.seconds || "0"}s</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;