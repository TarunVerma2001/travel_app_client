import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetTours = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    axios
      .get(url, { signal: abortCont.signal })
      .then((res) => {
        setTours(res.data.data.tours);
        setIsLoading(false);
        console.log(tours);
      })
      .catch((err) => {
        if (err.message === 'AbortError') {
          console.log('fetch aborted');
        } else {
          setIsLoading(false);
          setError(err.message);
        }
      });

    return () => abortCont.abort();
  }, [url]);

  return { tours, isLoading, error };
};

export default useGetTours;
