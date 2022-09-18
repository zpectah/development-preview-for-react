import React, { ReactNode } from 'react';

const PreviewDecorator = (node: ReactNode) => (
    <div className="decorator-1">
        <div className="decorator-2">
            {node}
        </div>
    </div>
);

export default PreviewDecorator;
