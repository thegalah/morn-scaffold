import { AbstractApiClient } from "../AbstractApiClient/AbstractApiClient";
import { GetWorker } from "./GetWorkers/GetWorkers";

export class LaForge extends AbstractApiClient {
    public readonly GetWorker = GetWorker;
}
