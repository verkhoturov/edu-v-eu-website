import { ReactNode } from 'react';
import { Main } from '../layout';
import { Header } from '../header';
import { Footer } from '../footer';

interface PageProps {
    children?: ReactNode;
}

export const Page = ({ children }: PageProps) => {
    return (
        <>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </>
    );
};
