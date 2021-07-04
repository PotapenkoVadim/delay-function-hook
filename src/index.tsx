import { useEffect, useState } from 'react';

export function useDelayFunction(): Function {
  const [timerID, setTimerID] = useState<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => clearTimeout(timerID!), [timerID]);

  return (callback: Function, miliseconds: number, ...args: any[]): void => {
    const timer = setTimeout(() => callback(...args), miliseconds);

    setTimerID(timer);
  };
}