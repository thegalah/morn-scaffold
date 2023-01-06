import axios from "axios";
import { getAxiosRequestConfig } from "../../AbstractApiClient/getAxiosRequestConfig";
import { IPostWorkerRequestBody, IPostWorkerResponseBody } from "./PostWorker.jsonschema";

export const PostWorkerRoute = (token: string, apiHost: string) => {
    return async (payload: IPostWorkerRequestBody): Promise<IPostWorkerResponseBody> => {
        const config = getAxiosRequestConfig(token);
        const request = await axios.post(`${apiHost}/submission`, payload, config);
        assertValidSchema(request.data, "#/definitions/IPostWorkerResponseBody");
        return request;
    };
};
