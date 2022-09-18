import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import { ThemeProvider, Global } from '@emotion/react';

import { theme, global } from '../styles';
import { ErrorBoundary } from '../modules/ErrorBoundary';
import { Dashboard } from '../modules/Dashboard';
import { Error404 } from '../modules/Error404';
import { Preview } from '../modules/Preview';

const App = () => (
    <>
        <ErrorBoundary>
            <ThemeProvider theme={theme}>
                <Global styles={global} />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="preview/:id" element={<Preview />} />
                        <Route path="*" element={<Error404 />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </ErrorBoundary>
    </>
);

export default App;
