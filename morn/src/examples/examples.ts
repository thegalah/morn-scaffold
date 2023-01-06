import { LaForge } from "../LaForge/LaForge";

// Calling la-forge endpoint
const token = "some-fake-token";
const apiHost = "https://example.com";
const apiClient = new LaForge(token, apiHost);

const main = async () => {
    const response = await apiClient.PostWorker({ workerId: "some-worker-id" });
    console.log(`Created worker with name: ${response.name}`);
};

main();
