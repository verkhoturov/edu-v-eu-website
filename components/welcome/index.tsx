import React from 'react';
import { Button } from '@/components/base';
import { Container } from '@/components/layout';

import styles from './index.module.scss';

export const Welcome = () => {
    return (
        <div className={styles.wrapper}>
            <Container>
                <Button size="lg">Отправить заявку</Button>
            </Container>
        </div>
    );
};
