import React from 'react';
import { NavLinkProps } from 'react-router-dom';
import { Scheme } from '../types/types';
export type Props = Omit<NavLinkProps, 'to'> & React.RefAttributes<HTMLAnchorElement> & {
    url?: Scheme;
    dispatcher?: () => void;
};
export declare const Link: React.FC<Props>;
//# sourceMappingURL=Link.d.ts.map