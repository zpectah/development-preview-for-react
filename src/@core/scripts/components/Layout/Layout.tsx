import React, { ReactNode, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { PAGE_TITLE } from '../../const';
import { Container, ContainerProps } from '../Container';

export interface LayoutProps {
    children?: ReactNode;
    variant?: 'default' | 'minimal';
    maxWidth?: ContainerProps['maxWidth'];
    meta?: {
        title?: string,
    };
    layout?: {
        title?: string,
    };
    backToDashboard?: boolean;
}

const Layout = (props: LayoutProps) => {
    const {
        children,
        variant = 'default',
        maxWidth,
        meta,
        layout,
        backToDashboard,
    } = props;

    useEffect(() => {
        let title = PAGE_TITLE;
        if (meta && meta.title) title = `${meta.title} | ${title}`;
        document.title = title;
    }, [ meta ]);

    return (
        <main className="dpr-layout">
            <Container
                maxWidth={maxWidth}
            >
                {layout?.title && (
                    <header className="dpr-layout-header">
                        <h1>
                            {layout.title}
                        </h1>
                        {backToDashboard && (
                            <Link
                                to="/"
                            >
                                Back to dashboard
                            </Link>
                        )}
                    </header>
                )}
                <div className={`dpr-layout-content layout--${variant}`}>
                    {children}
                </div>
            </Container>
        </main>
    );
};

export default Layout;
