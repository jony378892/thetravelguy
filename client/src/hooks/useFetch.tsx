import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T | undefined>(undefined);

  useEffect(() => {
    const baseURL = import.meta.env.VITE_API_URL;

    let isMounted = true;

    const fetchData = async () => {
      try {
        const res = await axios.get(baseURL + url);
        if (isMounted) {
          setData(res.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return data;
}
