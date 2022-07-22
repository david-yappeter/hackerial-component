import React, { ReactNode } from "react";
export interface BaseModalProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    isOpen: boolean;
    handleClose: Function;
}
