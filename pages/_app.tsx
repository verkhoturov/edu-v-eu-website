import '@/styles/globals.css';
import '@/styles/tailwind.css';
import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ weight: ['400', '500', '700'], subsets: ['cyrillic'] });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <style jsx global>{`
                html,
                body {
                    font-family: ${roboto.style.fontFamily};
                }
            `}</style>
            <NextUIProvider>
                <Component {...pageProps} />
            </NextUIProvider>
        </>
    );
}
