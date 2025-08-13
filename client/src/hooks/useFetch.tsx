import { useEffect, useState } from "react";
import { api } from "@/lib/utils";

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(url);
        if (res) {
          setData(res.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [url]);

  return { data };
}
