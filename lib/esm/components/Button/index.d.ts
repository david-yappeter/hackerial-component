/// <reference types="react" />
import './Button.scss';
import { ButtonProps } from './Button.type';
declare const Button: <T extends keyof ButtonProps>({ component, ...rest }: {
    component?: T | undefined;
} & ButtonProps[T]) => JSX.Element;
export default Button;
