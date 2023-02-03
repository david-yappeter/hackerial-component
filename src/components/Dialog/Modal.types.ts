import React, { ReactNode } from 'react';

export type ModalColors = 'primary' | 'error';

export interface BaseModalProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  header: ReactNode;
  isOpen: boolean;
  handleClose: Function;
  withoutCloseButton?: boolean;
  color?: ModalColors;
}
