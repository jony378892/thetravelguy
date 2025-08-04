import type { TravelData } from "@/interfaces/interface";
import useFetch from "./useFetch";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export default function useFetchDestination() {
  const [destinations, setDestinations] = useState<TravelData[] | null>(null);
  const data = useFetch<TravelData[]>("/api/travels");

  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    if (data) {
      if (path === "/destinations") {
        setDestinations(data);
      } else {
        setDestinations(data.slice(0, 9));
      }
    }
  }, [path, data]);

  return destinations;
}
