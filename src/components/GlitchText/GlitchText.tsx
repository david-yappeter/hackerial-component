import React from "react";
import { GlitchTextProps } from './GlitchText.types';
import classnames from 'classnames';

const GlitchText: React.FC<GlitchTextProps> = (props: GlitchTextProps) => {
    const {
        type,
        text,
    } = props;

    const stackCls = classnames({
        [`_glitch-stack-${type}`]: true,
    });


    return (<div className={stackCls}>
        <span style={{}}>{text}</span>
    </div>)
};

export default GlitchText;
