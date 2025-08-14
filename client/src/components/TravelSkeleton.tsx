import { Skeleton } from "./ui/skeleton";

export function TravelSkeleton() {
  return (
    <Skeleton className="w-full flex flex-col gap-3 h-72 bg-white">
      <Skeleton className="h-60 bg-gray-300"></Skeleton>
      <Skeleton className="w-full h-6 bg-gray-300"></Skeleton>
    </Skeleton>
  );
}
