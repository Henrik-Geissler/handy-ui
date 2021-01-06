import React, { FC } from 'react'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import FullHeight from '../FullHeight/FullHeight';
import {SnackbarProvider} from 'notistack'
interface PageProps {
  
}
const Page: FC<PageProps> = ({
  
}) => {
  
    return (
    <SnackbarProvider maxSnack={3}>
        <ErrorBoundary>
            <FullHeight>

            </FullHeight>
        </ErrorBoundary>
        </SnackbarProvider>
    );
}

export default Page;
