import { useEffect } from "react";
import { useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}
