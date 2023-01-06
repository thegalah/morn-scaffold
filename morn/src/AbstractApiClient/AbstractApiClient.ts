export abstract class AbstractApiClient {
    public constructor(private readonly bearerToken: string, private readonly apiHost: string) {}
}
