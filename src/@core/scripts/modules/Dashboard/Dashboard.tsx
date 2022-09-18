import React from 'react';
import styled from '@emotion/styled';

import config from '../../config';
import { Layout } from '../../components';
import DashboardTile from './DashboardTile';

const StyledWrapper = styled.div`
    width: 100%;
    margin: 0;
    padding: 1rem 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: .5rem;
`;

const Dashboard = () => {

    return (
        <Layout
            layout={{
                title: 'Dashboard title',
            }}
        >
            <StyledWrapper>
                {config.preview.previews.map((preview) => (
                    <DashboardTile
                        key={preview.meta.name}
                        preview={preview}
                    />
                ))}
            </StyledWrapper>
        </Layout>
    );
};

export default Dashboard;
