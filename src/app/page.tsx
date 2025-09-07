"use client";

import { useQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc";

export default function Home() {
  const trpc = useTRPC();
  const greetingQuery = useQuery(trpc.greeting.hello.queryOptions());

  return <div>{greetingQuery.data?.greeting}</div>;
}
