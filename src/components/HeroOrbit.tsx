import StarIcon from "@/assets/icons/star.svg";
import {PropsWithChildren} from "react";
import {twMerge} from "tailwind-merge";

export const HeroOrbit = ({children,size,rotate, shouldOrbit=false,shouldSpin=false,orbitDuration,spinDuration}:
                          PropsWithChildren<{size: number; rotate:number; shouldOrbit?:boolean;shouldSpin?:boolean;orbitDuration?:string;spinDuration?:string}>)=> {
    return (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className={twMerge(shouldOrbit===true && "animate-spin")} style={{animationDuration:orbitDuration}}>
                <div className="flex items-start justify-start" style={{
                    transform: `rotate(${rotate}deg)`,
                    height:`${size}px`,
                    width:`${size}px`
                }}>
                    <div className={twMerge(shouldSpin===true && "animate-spin")} style={{animationDuration:spinDuration}}>
                        <div className="inline-flex" style={{
                            transform: `rotate(${rotate * -1}deg)`,
                        }}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}