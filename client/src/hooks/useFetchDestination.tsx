import type { TravelData } from "@/interfaces/interface";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import useFetch from "./useFetch";

export default function useFetchDestination() {
  const [destinations, setDestinations] = useState<TravelData[] | null>(null);
  const { data, loading } = useFetch<TravelData[]>("/api/travels");
  const path = useLocation().pathname;

  useEffect(() => {
    if (!loading && data) {
      setDestinations(data);
    }
  }, [path, data, loading]);

  return { destinations, loading };
}
