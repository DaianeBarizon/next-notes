import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { TaskProvider } from 'providers/TaskProvider';

import { CategoryProvider } from 'providers/CategoryProvider';
import 'antd/dist/antd.css';
import 'public/vars.css';
import 'public/global.css';

import theme from 'theme';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <meta httpEquiv='cache-control' content='public' />
                <meta httpEquiv='Cache-Control' content='max-age=31536000' />
                <meta charSet='utf-8' />
                <meta name='robots' content='noindex' />
                <title>Minha lista de tarefas</title>
            </Head>
            <TaskProvider>
                <CategoryProvider>
                    <Component {...pageProps} />
                </CategoryProvider>
            </TaskProvider>
        </ThemeProvider>
    );
}

export default MyApp;
