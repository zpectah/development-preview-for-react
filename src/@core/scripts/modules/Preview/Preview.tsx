import React, {useMemo, useState} from 'react';
import { useParams, Link } from 'react-router-dom';

import config from '../../config';
import { Layout } from '../../components';
import { PreviewSidebar } from './PreviewSidebar';
import { PreviewDetail } from './PreviewDetail';

const Preview = () => {
    const [ metaTitle, setMetaTitle ] = useState<string | null>(null);
    const params = useParams();

    const renderDetail = useMemo(() => {
        const id = params.id;
        const detail = config.preview.previews.find((preview) => preview.path === id);

        if (!detail) {
            setMetaTitle(null);

            return (
                <div>
                    This detail does not exist, return to list ...
                    <br />
                    <Link
                        to="/"
                    >
                        Back to dashboard
                    </Link>
                </div>
            );
        }

        setMetaTitle(detail.meta.name);

        return <PreviewDetail preview={detail} />;
    }, [ params.id ]);

    return (
        <Layout
            meta={{
                title: `${metaTitle ? `${metaTitle} | ` : ' '}Preview detail`,
            }}
            layout={{
                title: 'Preview title',
            }}
            backToDashboard
        >
            <PreviewSidebar />
            {renderDetail}
        </Layout>
    );
};

export default Preview;
