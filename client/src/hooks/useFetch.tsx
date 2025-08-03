import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T>();

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000${url}`);
        if (res) {
          setData(res.data);
        }

        return data;
      } catch (error) {
        console.log(error);
        throw new Error("Error fetching data");
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return data;
}
