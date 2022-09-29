import { rest } from "msw";
import * as mockFoods from "./mockFoods";
import { WorkerConfig } from "./useWorker";

export function getHandlers(config: WorkerConfig) {
    return [
        rest.get("http://localhost:3001/foods", (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json(
                    config.foodResponse === "Diner"
                        ? mockFoods.mockDiner
                        : mockFoods.mockIceCreamShop
                )
            );
        }),
    ];
}
