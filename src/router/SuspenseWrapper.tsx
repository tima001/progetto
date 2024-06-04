import React, { Suspense } from 'react'
import { CircularProgress } from '@mui/material'
import styled from '@emotion/styled';

interface SuspenseWrapperProps {
    path: string;
}

const SuspenseWrapper = (props: SuspenseWrapperProps) => {
    const LazyComponent = React.lazy(() => import(`../${props.path}`))

    return (
        <Suspense
            fallback={
                <LoaderContainer>
                    <LoaderContainerInner>
                        <CircularProgress />
                    </LoaderContainerInner>
                </LoaderContainer>
            }
        >
            <LazyComponent />
        </Suspense>
    )
}

export default SuspenseWrapper

const LoaderContainer = styled.div`
    height: 100vh;
`

const LoaderContainerInner = styled.div`
margin-top: 20vh;
`