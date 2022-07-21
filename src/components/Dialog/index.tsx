import Modal from './Modal';
import './Modal.scss';
import { BaseModalProps } from './Modal.types';

const Dialog = (props: BaseModalProps)  => {
    return <Modal {...props}/>
};

export default Dialog;
