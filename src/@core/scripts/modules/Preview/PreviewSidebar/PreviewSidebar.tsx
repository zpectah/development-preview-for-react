import React from 'react';
import { Link } from 'react-router-dom';

import config from '../../../config';
import { PreviewSidebarProps } from './types';

const PreviewSidebar = (props: PreviewSidebarProps) => {
    const {} = props;

    return (
        <aside>
            sidebar panel ...
            <div>
                {config.preview.previews.map((preview) => (
                    <Link
                        key={preview.meta.name}
                        to={`/preview/${preview.path}`}
                    >
                        {preview.meta.name}
                    </Link>
                ))}
            </div>
        </aside>
    );
};

export default PreviewSidebar;
