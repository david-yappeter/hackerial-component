import React from 'react';
import { Button } from '..';
import { BaseModalProps } from './Modal.types';
import ReactPortal from './portal';
import classNames from 'classnames';

const Modal: React.FC<BaseModalProps> = (props: BaseModalProps) => {
  const {
    children,
    color,
    handleClose: _handleClose,
    header,
    isOpen,
    withoutCloseButton,
    ...rest
  } = props;

  if (!isOpen) {
    return null;
  }

  const handleClose = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();
    _handleClose(e);
  };

  return (
    <ReactPortal wrapperId='__presentation'>
      <div
        className={classNames({
          modal: true,
          error: color === 'error',
        })}
        {...rest}
        onClick={withoutCloseButton ? handleClose : undefined}
      >
        <div className='modal-content'>
          {header && <div className='modal-title'>{header}</div>}
          <div className='modal-body'>{children}</div>
          <div className='modal-footer'>
            {!withoutCloseButton && (
              <Button
                component='button'
                variant='no-border'
                onClick={handleClose}
                className='close-btn'
              >
                Close
              </Button>
            )}
          </div>
        </div>
      </div>
    </ReactPortal>
  );
};

export default Modal;
