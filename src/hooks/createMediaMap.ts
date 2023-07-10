import CSS from "csstype";

interface MediaStyleType{
    priority:"default" | string,
    css:CSS
}
type CreateMediaMap = (styles:{[key:string]:MediaStyleType}) => string

export const createMediaStyles:CreateMediaMap = (styles)=>{
    return "1"
}