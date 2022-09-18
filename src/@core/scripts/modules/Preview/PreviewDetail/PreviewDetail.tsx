import React from 'react';
import styled from '@emotion/styled';

import config from '../../../config';
import { PreviewDetailProps, NodeWrapperType } from './types';
import PreviewHeader from './PreviewHeader';

const Article = styled.article`
  color: ${({ theme }: any) => theme.colors.primary};
`;
const Preview = styled.div``;
const Inner = styled.div``;

const PreviewDetail = (props: PreviewDetailProps) => {
    const { preview } = props;

    const renderPreview = () => {
        const Node = preview.node as NodeWrapperType;

        return (
            <Article className="dpr-preview-article">
                <PreviewHeader
                    title={preview.meta.name}
                />
                <Preview
                    className="dpr-preview-article-preview"
                >
                    <Inner
                        className="dpr-preview-article-preview-inner"
                    >
                        <Node {...preview.props} />
                    </Inner>
                </Preview>
            </Article>
        );
    };

    if (config.preview.decorator) {
        return (
            <>
                {config.preview.decorator(renderPreview())}
            </>
        );
    }

    return (
        <>
            {renderPreview()}
        </>
    );
};

export default PreviewDetail;
