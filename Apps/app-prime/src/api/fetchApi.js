import { z } from "zod";

const limitSchema = z.object({
    limit: z.number().min(1).max(50),
});

export async function fetchLimit(time = 1000) {
    await new Promise((r) => setTimeout(r, time));
    const raw = { limit: Math.floor(Math.random() * 15) + 10 };
    return limitSchema.parse(raw);
}