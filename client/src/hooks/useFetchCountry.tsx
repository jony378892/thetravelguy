import useFetch from "@/hooks/useFetch";
import type { TravelData } from "@/interfaces/interface";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function useFetchCountry() {
  const [data, setData] = useState<TravelData | null>(null);
  const params = useParams();
  const country = params.country;

  const tempData = useFetch<TravelData>(`/api/destination/${country}`);

  useEffect(() => {
    if (tempData) {
      setData(tempData);
    }
  }, [tempData]);

  return data;
}
