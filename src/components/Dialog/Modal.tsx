import React from "react";
import { Button } from "..";
import { BaseModalProps } from './Modal.types';
import ReactPortal from "./portal";

const Modal: React.FC<BaseModalProps> = (props: BaseModalProps) => {
    const {
        children,
        isOpen,
        handleClose,
        header,
        ...rest
    } = props;

    if(!isOpen) {
        return null;
    }

    return(
        <ReactPortal wrapperId="__presentation">
            <div className="modal" {...rest}>
                <div className="modal-content">
                    {header && <div className="modal-title">{header}</div>}
                    <div className="modal-body">
                        {children}
                    </div>
                    <div className="modal-footer">
                        <Button component="button" variant="no-border" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {e.stopPropagation();handleClose(e)}} className="close-btn">
                            Close
                        </Button>
                    </div>
                </div>
            </div>
        </ReactPortal>
    )
};

export default Modal;
