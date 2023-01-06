import { AxiosRequestConfig } from "axios";

export const getAxiosRequestConfig = (token?: string | null, signal?: AbortSignal | undefined): AxiosRequestConfig => {
    const defaultHeaders = {};
    return {
        headers: {
            ...defaultHeaders,
            ...(token !== null && { Authorization: `Bearer ${token}` }),
        },
        ...(signal !== undefined && { signal }),
    };
};
