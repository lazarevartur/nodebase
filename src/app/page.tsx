import { makeQueryClient } from '@/trpc/query-client';
import { Client } from './client';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { trpc } from '@/trpc/server';

export default function Home() {
  const qc = makeQueryClient();
  void qc.prefetchQuery(trpc.getUsers.queryOptions());
  return (
    <div>
      <HydrationBoundary state={dehydrate(qc)}>
        <Client />
      </HydrationBoundary>
    </div>
  );
}
