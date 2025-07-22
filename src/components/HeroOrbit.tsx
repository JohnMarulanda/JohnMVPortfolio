import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const HeroOrbit = ({ children, size, rotate, orbitDuration, shouldOrbit, spinDuration }: PropsWithChildren<{ size: number, rotate: number, orbitDuration?: number, shouldOrbit?: boolean, spinDuration?: number }>) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className={twMerge(shouldOrbit == true && "animate-spin")} style={{ animationDuration: orbitDuration ? `${orbitDuration}s` : "10s" }}>
        <div className="flex items-start justify-start" style={{ width: size, height: size, transform: `rotate(${rotate}deg)` }}>
          
          <div className="animate-spin" style={{ animationDuration: spinDuration ? `${spinDuration}s` : "10s" }}>

          <div className="inline-flex" style={{ transform: `rotate(${rotate * -1}deg)` }}>
            {children}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};