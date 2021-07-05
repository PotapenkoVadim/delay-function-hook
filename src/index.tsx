import { useEffect, useState } from 'react';

export function useDelayFunction(): Function {
  const [timerID, setTimerID] = useState<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => clearTimeout(timerID!), [timerID]);

  return (callback: Function, milliseconds: number, ...args: any[]): Promise<any> => {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        try {
          const result = callback(...args);

          resolve(result);
        } catch (error) {
          reject(error);
        }
      }, milliseconds);

      setTimerID(timer);
    });
  };
}