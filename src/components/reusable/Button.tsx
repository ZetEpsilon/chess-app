import React from "react";
import styled from "styled-components";
import {jsx} from "@emotion/react";
import JSX = jsx.JSX;

const buttonStyle = {
    light:{
        primary:`
            background:#7fa650;
            color:#fff;
         `,
        shadow:'box-shadow:0 5px 0 0 #537133,0 0 0;'
    }

    ,
    dark:{
        primary:`   
            background: #FFFFFF14;
            color:  #FFFFFFB8;
           
        `,
        shadow: 'box-shadow: 0 5px 0 0  hsla(0,0%,100%,.05),0 0 0;'
    }
}

export enum ButtonType{
    Light = 'light',
    Dark = 'dark',
}

interface ButtonProps{
    type:ButtonType,
    is3D?:boolean
    width?:string,
    height?:string,
    children?:JSX.Element | string | undefined,
    fontSize?:string,
    className?:string,
}

export const Button:React.FC<ButtonProps> = (props)=>{
    return (
        <ButtonTag className={props.className} type={props.type} is3D={props.is3D} width={props.width} height={props.height} fontSize={props.fontSize}>
            {props.children && props.children}
        </ButtonTag>
    )
}



const ButtonTag = styled.div<ButtonProps>`
  text-align: center;
  font-size: ${(state:ButtonProps)=>state.fontSize || "16px"};
  margin: 20px 5px;
  border-radius:10px;
  cursor: pointer;
  padding: 15px;
  width: ${(props:ButtonProps)=>props?.width || "100%"};
  height: ${(props:ButtonProps)=>props?.height || "100%"};
  ${(props:ButtonProps)=>{
      return buttonStyle[props.type].primary
  }}
  ${(props:ButtonProps)=>{
      if(props.is3D){
          return buttonStyle[props.type].shadow
      }
  }}
  
  &:active{
    transform: scale(0.99);
  }
`