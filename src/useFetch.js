import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      const res = await fetch(url);

      if (!res.ok) {
        setIsLoading(false);
        return setIsError(true);
      }
      const resData = await res.json();
      setData(resData);
    } catch (err) {
      console.log(err.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, isError };
};
