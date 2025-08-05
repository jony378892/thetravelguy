import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const baseURL = import.meta.env.VITE_API_URL;

    const fetchData = async () => {
      try {
        const res = await axios.get(baseURL + url);
        if (res) {
          setData(res.data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading };
}
