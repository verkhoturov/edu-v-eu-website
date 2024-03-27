import React from 'react';
import { Button as UIButton, ButtonProps as UIButtonProps } from '@nextui-org/react';
import styles from './button.module.scss';

interface ButtonProps extends UIButtonProps {
    children?: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
    return <UIButton {...props} className={styles.button} variant="bordered" radius="full" />;
};
