import { createContext, type ReactNode } from "react";
import useFetch from "@/hooks/useFetch";
import type { TravelData } from "@/interfaces/interface";

export const DataContext = createContext<TravelData[] | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const data = useFetch<TravelData[]>("/api/travels");

  return <DataContext value={data}>{children}</DataContext>;
}
