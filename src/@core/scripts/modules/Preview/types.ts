import { JSXElementConstructor, ReactNode } from 'react';

export type nodeType = ReactNode | JSXElementConstructor<any>;
export type decoratorType = (Node: ReactNode) => ReactNode;

export interface Preview {
    path: string,
    node: nodeType,
    props: {
        [k: string]: any,
    },
    meta: {
        name: string,
        description?: string,
        version?: string,
        author?: string,
        docs?: string,
    },
}

export interface PreviewConfig {
    decorator?: decoratorType,
    previews: Preview[],
}
