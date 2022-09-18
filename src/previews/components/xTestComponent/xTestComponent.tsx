import React, { ReactNode } from 'react';

type XTestComponentProps = {
    children?: ReactNode,
    someString?: string,
    someNumber?: number,
}

const XTestComponent = (props: XTestComponentProps) => {
    const {
        children,
        someString,
        someNumber,
    } = props;

    return (
        <div>
            {children ? children : 'no content was set'}
            <div>string {someString}</div>
            <div>number {someNumber}</div>
        </div>
    );
};

export default XTestComponent;
