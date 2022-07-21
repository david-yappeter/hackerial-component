// import './Button.scss';
import './Button.css';
import { ButtonProps } from './Button.type';
import ButtonLink from './ButtonLink/index';
import ButtonBase from './ButtonBase/index';

const Button = <T extends keyof ButtonProps> ({component, ...rest}: {component?: T} & ButtonProps[T]) => {
    switch(component) {
        case 'link': return <ButtonLink {...rest} />
        default: return <ButtonBase {...rest} />
    }
}

export default Button;
