import { useEffect, useState } from "react";

export function useAjax(apiUrl) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData(apiUrl).then(data => setData(data));
  }, []);

  return data;
}

async function fetchData(apiUrl) {
  const res = await fetch(apiUrl);
  const data = await res.json();
  return data;
}