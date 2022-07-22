import React, { ReactNode } from "react";
export declare type ButtonVariants = 'border' | 'no-border';
export declare type ButtonSizes = 'small' | 'medium' | 'large';
export declare type ButtonColors = ('primary' | 'secondary');
export interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariants;
    color?: ButtonColors;
    size?: ButtonSizes;
    uppercase?: boolean;
    icon?: ReactNode;
}
export interface LinkButtonProps extends BaseButtonProps {
    href?: string;
    target?: string;
    as?: React.FC<React.HTMLAttributes<HTMLAnchorElement> & {
        href?: string;
        target?: string;
        rel?: string;
    }>;
}
export declare type ButtonProps = {
    link: LinkButtonProps;
    button: BaseButtonProps;
    submit: BaseButtonProps;
};
