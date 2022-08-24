import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [statusCode, setStatusCode] = useState(null);
  const [components, setComponents] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();

      setStatusCode(json);
      setComponents(JSON.parse(json.body));
    };

    fetchData();
  }, [url]);

  return { statusCode, components };
};
