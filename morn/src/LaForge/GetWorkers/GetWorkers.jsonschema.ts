export interface IGetWorkersRequestBody {
    readonly workerId: string;
}

export interface IGetWorkersResponseBody {
    readonly _id: string;
    readonly name: string;
    readonly someOptionalProperty?: string;
}
