import React from "react";
import styled from "styled-components";
import {jsx} from "@emotion/react";
import {ComponentHasChild, ComponentHasCss} from "@/index";
import Link from "next/link";

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

interface ButtonProps extends ComponentHasChild, ComponentHasCss{
    type:ButtonType,
    is3D?:boolean
    width?:string,
    height?:string,
    fontSize?:string,
    className?:string,
    href?:string
}

export const Button:React.FC<ButtonProps> = (props)=>{
    const href = props.href || "#" //todo: remove it when all link will have valid href
    console.log(props.is3D)
    return (
        <ButtonTag className={props.className}
                   type={props.type}
                   $is3D={props.is3D}
                   width={props.width} height={props.height}
                   fontSize={props.fontSize}
                   css = {props.css}
                   href = {href}
        >
            {props.children && props.children}
        </ButtonTag>
    )
}



const ButtonTag = styled(Link)<ButtonProps>`
  
  text-align: center;
  font-size: ${(state:ButtonProps)=>state.fontSize || "16px"};
  border-radius:10px;
  cursor: pointer;
  padding: 15px;
  width: 100%;
  max-width: ${(props:ButtonProps)=>props?.width || "100%"};
  // height: ${(props:ButtonProps)=>props?.height || "100%"};
  user-select: none;
  display: block;
  ${(props:ButtonProps)=>{
      return buttonStyle[props.type].primary
  }}
  ${(props:ButtonProps)=>{
      if(props.$is3D){
          return buttonStyle[props.type].shadow
      }
  }}

  ${(props:ButtonProps)=>props.css}
  
  &:active{
    transform: scale(0.99);
  }
  
  @media(max-width: 680px){
    font-size: 16px;
  }
`