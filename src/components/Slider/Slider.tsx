import './Slider.scss';
import classNames from "classnames";
import React, { useMemo } from "react";
import { BaseSliderProps } from "./Slider.types";

const Slider: React.FC<BaseSliderProps> = (props: BaseSliderProps) => {
    const {
        min,
        max,
        step = "1",
        ...rest
    } = props;

    const inputCls = classNames({
        '_slider': true,
    });

    const component = useMemo(() => (
        <input className={inputCls} type="range" min={min} max={max} step={step} {...rest}/>
    ), [min, max, step]);

    return component;
};

export default Slider;
