import { Skeleton } from "./ui/skeleton";

export function TravelSkeleton() {
  return (
    <Skeleton className="w-full flex flex-col gap-3">
      <Skeleton className="h-60"></Skeleton>
      <Skeleton className="w-full h-6"></Skeleton>
    </Skeleton>
  );
}
