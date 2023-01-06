import axios from "axios";
import { IGetWorkersRequestBody, IGetWorkersResponseBody } from "./GetWorkers.jsonschema";

export const GetWorkerRoute = (apiHost: string) => {
    async (payload: IGetWorkersRequestBody) => {
        const request = await axios.get("/workers");
        assertValidSchema(request.data, "#/definitions/IGetWorkersResponseBody");
        return request;
    };
};
