import React, { useMemo } from 'react';
import { LinkButtonProps } from '../Button.type';
import ButtonBase from '../ButtonBase';

const ButtonLink: React.FC<LinkButtonProps> = (props: LinkButtonProps) => {
    const { as, href, target, ...rest} = props;

    const Container = useMemo(() => {
        const aTagProperties = {
            href,
            target,
            rel: 'noopener noreferrer',
        };

        if(props.as) {
            const RenderComponent = props.as;
            return (
                <RenderComponent {...aTagProperties}>
                    <ButtonBase {...rest}/>
                </RenderComponent>
            )
        }

        return (
            <a {...aTagProperties}> 
                <ButtonBase {...rest} />
            </a>
        )
    }, [as])

    return Container;
}

export default ButtonLink;
