import React from "react";
import { useScreenWidth } from "./useScreenWidth";

interface IScreenWidthProps{
    children:(screenWidth:number)=>JSX.Element;
}

export const ScreenWidthFunc: React.FunctionComponent<IScreenWidthProps>=(props):JSX.Element=>{
    
    const screenWidth=useScreenWidth();

    return props.children(screenWidth);
}