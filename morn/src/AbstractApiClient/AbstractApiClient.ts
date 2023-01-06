export abstract class AbstractApiClient {
    public constructor(protected readonly bearerToken: string, protected readonly apiHost: string) {}
}
