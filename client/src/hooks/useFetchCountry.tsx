import useFetch from "@/hooks/useFetch";
import type { DestinationData } from "@/interfaces/interface";
import { useParams } from "react-router";

export default function useFetchCountry() {
  const { country } = useParams();
  return useFetch<DestinationData>(`/api/destination/${country}`);
}
