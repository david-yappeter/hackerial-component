import './Typography.scss';
import React, { useMemo } from "react";
import classNames from "classnames";
import { TypographyProps } from "./Typography.types";

const Typography: React.FC<TypographyProps> = (props: TypographyProps) => {
    const {
        variant = 'body1',
        as = 'p',
        children,
        ...rest
    } = props;

    const typographyCls = classNames({
        '_typography': true,
        [`_typography-${variant}`]: true,
        '_typography-header': ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(variant),
    });

    const component = useMemo(() => {
        return React.createElement(
            as, 
            {
                className: typographyCls,
                ...rest,
            },
            children,
        );
    }, [as, children, variant, rest]);

    return component;
}

export default Typography;
