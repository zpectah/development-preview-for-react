import React from 'react';

import { Button } from '../../../components';

export interface PreviewHeaderProps {
    title: string,
}

const PreviewHeader = (props: PreviewHeaderProps) => {
    const {
        title,
    } = props;

    return (
        <header className="dpr-preview-article-header">

            <div>
                <h2>
                    {title}
                </h2>

                <Button>
                    sidebar menu toggle
                </Button>

                <Button>
                    show/hide code
                </Button>
            </div>

        </header>
    );
};

export default PreviewHeader;
