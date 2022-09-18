import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import { palette } from '../../styles';
import { DashboardTileProps } from './types';

const StyledTile = styled(Link)`
    width: 25%;
    height: 125px;
    margin: 0;
    padding: 2rem;
    text-decoration: none;
    display: flex;
    flex: auto;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: .5rem;
    color: ${palette.secondary};
    background-color: ${palette.light};
    border: 1px solid ${palette.secondary};
    border-radius: .25rem;
    position: relative;
    overflow: hidden;
    transition: color .25s cubic-bezier(0.4, 0, 0.2, 1) 0s, background-color .25s cubic-bezier(0.4, 0, 0.2, 1) 0s;
    
    & h3{
        margin: 0;
        padding: 0;
    }
    & small{
        margin: 0;
        padding: 0;
    }
    & p{
        margin: 0;
        padding: 0;
    }    
    
    &:hover{
        color: ${palette.light};
        background-color: ${palette.secondary};
    }
    
`;

const DashboardTile = (props: DashboardTileProps) => {
    const {
        preview,
    } = props;

    return (
        <StyledTile
            to={`/preview/${preview.path}`}
        >
            <h3>
                {preview.meta.name}
            </h3>
            {preview.meta.description && (
                <p>
                    {preview.meta.description}
                </p>
            )}
            <div>
                {preview.meta.version && (
                    <small>
                        &nbsp;v{preview.meta.version}
                        {preview.meta.author && ' | '}
                    </small>
                )}
                {preview.meta.author && (
                    <small>
                        Author: {preview.meta.author}
                    </small>
                )}
            </div>
        </StyledTile>
    );
};

export default DashboardTile;
