export interface IPostWorkerRequestBody {
    readonly workerId: string;
}

export interface IPostWorkerResponseBody {
    readonly _id: string;
    readonly name: string;
    readonly someOptionalProperty?: string;
}
