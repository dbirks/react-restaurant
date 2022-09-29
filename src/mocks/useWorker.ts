import { setupWorker, SetupWorkerApi } from "msw";
import { useEffect, useState } from "react";
import { FoodResponse } from "./DevTools";
import { handlers } from "./handlers";

type WorkerConfig = {
    foodResponse: FoodResponse;
};

export function useWorker(config: WorkerConfig) {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const worker = setupWorker(...handlers);

        const startWorker = async (worker: SetupWorkerApi) => {
            await worker.start();
            setIsReady(true);
        };

        startWorker(worker);
    }, []);

    return isReady;
}
