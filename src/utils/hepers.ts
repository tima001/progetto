import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

/**
 * Type predicate to narrow an unknown error to `FetchBaseQueryError`
 */
export function isFetchBaseQueryError(
    error: unknown,
): error is FetchBaseQueryError {
    return typeof error === 'object' && error != null
}

/**
 * Type predicate to narrow an unknown error to an object with a string 'message' property
 */
export function isErrorWithMessage(error: unknown): error is {
    data: {
        errors: { code: number; message: string }[]
    }
} {
    return (
        typeof error === 'object' &&
        error != null &&
        'data' in error &&
        typeof (error as any).data === 'object'
    )
}
