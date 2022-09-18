import React, { FC, createElement } from 'react';

import { ButtonBaseProps } from './types';

const ButtonBase: FC<ButtonBaseProps> = (props) => {
    const {
        children,
        ...rest
    } = props;

    return createElement(
        'button',
        { ...rest },
        children,
    );
};

export default ButtonBase;
