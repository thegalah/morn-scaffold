import { AbstractApiClient } from "../AbstractApiClient/AbstractApiClient";
import { PostWorkerRoute } from "./PostWorker/PostWorker";

export class LaForge extends AbstractApiClient {
    public readonly PostWorker = PostWorkerRoute(this.bearerToken, this.apiHost);
}
