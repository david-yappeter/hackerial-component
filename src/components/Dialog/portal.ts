import { useState, useLayoutEffect } from "react";
import { createPortal } from "react-dom";

function createWrapperAndAppendToBody(wrapperId: string) {
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute('id', wrapperId);
    document.body.appendChild(wrapperElement);
    return wrapperElement;
}

function ReactPortal({children, wrapperId} : { children: React.ReactNode, wrapperId: string }) { 
    const [wrapperElement, setWrapperElement] = useState<HTMLElement | undefined | null>(null);

    useLayoutEffect(() => {
        let element = document.getElementById(wrapperId);
        let systemCreated = false;
        
        if(!element) {
            systemCreated = true;
            element = createWrapperAndAppendToBody(wrapperId);
        }

        setWrapperElement(element);
        
        // Clean Up Wrapper when Unmount
        return () => {
            if(systemCreated && element?.parentNode) {
                element.parentNode.removeChild(element);
            }
        };
    }, [wrapperId]);

    if(wrapperElement === null || wrapperElement === undefined) return null;

    return createPortal(children, wrapperElement); 
}

export default ReactPortal;
