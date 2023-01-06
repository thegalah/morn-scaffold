import axios from "axios";
import { getAxiosRequestConfig } from "../../AbstractApiClient/getAxiosRequestConfig";
import { IPostWorkerRequestBody, IPostWorkerResponseBody } from "./PostWorker.jsonschema";

export const PostWorkerRoute = (token: string, apiHost: string) => {
    async (payload: IPostWorkerRequestBody): Promise<ISchema["#/definitions/IGetWorkersResponseBody"]> => {
        const config = getAxiosRequestConfig(token);
        const request = await axios.post(`${apiHost}/submission`, payload, config);
        assertValidSchema(request.data, "#/definitions/IGetWorkersResponseBody");
        return request;
    };
};
