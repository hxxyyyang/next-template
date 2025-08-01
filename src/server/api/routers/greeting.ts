import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const greetingRouter = createTRPCRouter({
  hello: publicProcedure.query(() => {
    return {
      greeting: "Hello from tRPC!",
    };
  }),
});
