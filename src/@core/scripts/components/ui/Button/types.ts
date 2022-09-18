import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ButtonBaseProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children?: ReactNode;
}

export interface ButtonProps extends ButtonBaseProps {}
