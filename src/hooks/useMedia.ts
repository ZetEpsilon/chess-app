import {useEffect, useState} from "react";

export const useMedia = (query:string)=>{
    const [width, setWidth] = useState<number | undefined>(undefined);
    const [height, setHeight] = useState<number | undefined>(undefined);
    const [match, setMatch] = useState<boolean | undefined>(undefined);
    if(typeof window === 'undefined') return undefined
    const handleResize = ()=>{
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
        setMatch(window.matchMedia(query).matches);
    }

    useEffect(()=>{
        setMatch(window.matchMedia(query).matches);
        window.addEventListener('resize', handleResize)
        return ()=> removeEventListener("resize", handleResize)
    }, [width, height]);


    return match;
}

