import { ReactNode } from "react";

export interface ICircle{
    x:number;
    y:number;
    radius:number;
    id:number;
}


export interface ICircleProps{
    circle:ICircle
}


export interface ErrorBoundaryProps {
  children: ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
}