import React from "react";
import './GlitchText.scss';
import { GlitchTextProps } from './GlitchText.types';
import classnames from 'classnames';

const GlitchText: React.FC<GlitchTextProps> = (props: GlitchTextProps) => {
    const {
        type,
        text,
        fontSize,
    } = props;

    const stackCls = classnames({
        '_glitch-stack': true,
        [`_glitch-stack-${type}`]: true,
    });


    return (<div className={stackCls} style={{ '--stacks' : '3'} as React.CSSProperties}>
        <span style={{ '--index': '0', fontSize: fontSize ? fontSize : 'inherit' } as React.CSSProperties}>{text}</span>
        <span style={{ '--index': '1', fontSize: fontSize ? fontSize : 'inherit' } as React.CSSProperties}>{text}</span>
        <span style={{ '--index': '2', fontSize: fontSize ? fontSize : 'inherit' } as React.CSSProperties}>{text}</span>
    </div>)
};

export default GlitchText;
