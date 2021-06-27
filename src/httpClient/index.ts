import { merge } from 'lodash';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import Config from 'react-native-config';

const APPLICATION_JSON = 'application/json';
const CONTENT_TYPE = 'Content-Type';

let accessToken: string | undefined;

/**
 * Update access token into universal user object
 * @param authorizedUser
 */
export function updateAccessTokenToHeader(
    _accessToken: string | undefined,
): void {
    accessToken = _accessToken;
}

/**
 * Configure default request config
 * @param requestConfig
 */
export const configure = (
    requestConfig: AxiosRequestConfig = {},
): AxiosRequestConfig => {
    const targetConfig = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
        timeout: 30000,
    };
    if (accessToken) {
        merge(targetConfig, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
    }

    return merge(targetConfig, requestConfig);
};

const client = axios.create({
    baseURL: Config.API_URL,
    headers: {
        Accept: APPLICATION_JSON,
        [CONTENT_TYPE]: APPLICATION_JSON,
    },
});
//
client.interceptors.request.use(
    (config: AxiosRequestConfig): AxiosRequestConfig => configure(config),
    (error): Promise<Error> =>
        // if (error.message.toString() === 'Network Error')
        //   error.message = CommonMsg.NetworkError;
        Promise.reject(error),
);

client.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse =>
        // throwErrorIfMalformed(response);
        // throwErrorIfEmpty(response);
        response,
    (error: Error): Promise<Error> =>
        // throwErrorIfAuthFailed(error);
        // if (error.message.toString() === 'Network Error')
        //   error.message = CommonMsg.NetworkError;
        Promise.reject(error),
);

export default client;
