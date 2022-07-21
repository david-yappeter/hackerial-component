import React from "react";
import { BaseModalProps } from './Modal.types';

const Modal: React.FC<BaseModalProps> = (props: BaseModalProps) => {
    const {
        children,
        isOpen,
        handleClose,
        ...rest
    } = props;

    if(!isOpen) {
        return null;
    }

    return(
        <div className="modal" {...rest}>
            <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {e.stopPropagation();handleClose(e)}} className="close-btn">
        Close
            </button>
            <div className="modal-content">{children}</div>
        </div>
    )
};

export default Modal;
