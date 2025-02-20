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
    <div className="flex flex-col items-center bg-purple-600 text-teal-200 p-2 rounded-full shadow-full">
      <h1 className='text-3xl text-[#F0F8FF]'>see you at HACKTHEVISION 2K25 in</h1>
      <div className="text-4xl font-mono">
        <span>{timeLeft.days || '0'}d </span>
        <span>{timeLeft.hours || '0'}h </span>
        <span>{timeLeft.minutes || '0'}m </span>
        <span>{timeLeft.seconds || '0'}s</span>
      </div>
    </div>
  );
};

export default Countdown;