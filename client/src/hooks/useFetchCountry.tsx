import useFetch from "@/hooks/useFetch";
import type { TravelData } from "@/interfaces/interface";
import { useParams } from "react-router";

export default function useFetchCountry() {
  const { country } = useParams();
  return useFetch<TravelData>(`/api/destination/${country}`);
}
