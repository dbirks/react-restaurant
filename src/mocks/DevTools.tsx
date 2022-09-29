import { useState } from "react";
import { Food } from "../food";

type FoodResponse = "Ice cream shop" | "Diner";

export default function DevTools() {
    const [foodsResponse, setFoodsResponse] = useState<FoodResponse>("Diner");

    return (
        <section className="fixed p-4 border shadow-xl max-h-screen overflow-auto bg-white opacity-90 bottom-0">
            <label className="block">Foods Response</label>
            <select value={foodsResponse}>
                <option value="Ice cream shop">Ice cream shop</option>
                <option value="Diner">Diner</option>
            </select>
        </section>
    );
}
