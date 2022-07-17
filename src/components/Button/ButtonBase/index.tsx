import React from "react";
import classnames from 'classnames';
import { BaseButtonProps  } from '../Button.type';

const ButtonBase: React.FC<BaseButtonProps> = (props: BaseButtonProps) => {
    const {
        className,
        children,
        color = 'primary',
        capitalize = false,
        size = 'small',
        ...rest
    } = props;

    const btnCls =  classnames({
        'btn btn-primary': true,
        'btn-capitalize': capitalize,
        'btn-sm': size === 'small',
        'btn-md': size === 'medium',
        'btn-lg': size === 'large'
    });

    return <button className={btnCls} {...rest}>
        {children}
    </button>
};

export default ButtonBase;

