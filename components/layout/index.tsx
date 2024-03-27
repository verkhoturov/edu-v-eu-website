import { ReactNode } from 'react';
import styles from './index.module.scss';

interface LayoutProps {
    children?: ReactNode;
}

export const Main = ({ children }: LayoutProps) => {
    return <main className={styles.main}>{children}</main>;
};

export const Container = ({ children }: LayoutProps) => {
    return <div className={styles.container}>{children}</div>;
};
