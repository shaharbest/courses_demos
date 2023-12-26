
import { useState, useEffect } from 'react';

export function useAjax(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData(url).then(result => setData(result));
  }, []);

  return data;
}

async function fetchData(url) {
  const res = await fetch(url);
  return await res.json();
}