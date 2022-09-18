import React, { FC, createElement } from 'react';
import styled from '@emotion/styled';

import ButtonBase from './ButtonBase';
import { ButtonProps } from './types';

const StyledButton = styled(ButtonBase)`
    width: auto;
    height: auto;
    margin: 0;
    padding: .5rem 1rem;
    display: inline-flex;

    font-size: 1rem;
    color: ${({ theme }: any) => theme.colors.light};
    background-color: ${({ theme }: any) => theme.colors.primary};
    border: 0;
    border-radius: .25rem;
    
    outline: none;
    cursor: pointer;

`;

const Button: FC<ButtonProps> = (props) => {
    const {
        children,
        ...rest
    } = props;

    return createElement(
        StyledButton,
        { ...rest },
        children,
    );
};

export default Button;
