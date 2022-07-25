import React from 'react';

export type GlitchType = 1 | 2;

export interface GlitchTextProps extends React.HTMLAttributes<HTMLElement> {
    type: GlitchType,
    fontSize?: string,
    text: string,
}

