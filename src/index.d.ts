import CSS from 'csstype';
export interface ComponentHasChild{
    children?:JSX.Element | string | undefined,
}
export interface ComponentHasCss{
    css?:string
}