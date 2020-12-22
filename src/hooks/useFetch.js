import { useEffect, useState } from 'react';

const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [err, setErr] = useState(null);
  const [fetchLoading, setFetchLoading] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(url);
    if (searchParams.has('query') && !searchParams.get('query')) {
      return;
    }
    const abortController = new AbortController();
    const signal = abortController.signal;
    const doFetch = async () => {
      setFetchLoading(true);
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        if (!signal.aborted) {
          setResponse(json.results);
          setErr(null);
        }
      } catch (e) {
        if (!signal.aborted) {
          setErr(e);
        }
      } finally {
        if (!signal.aborted) {
          setFetchLoading(false);
        }
      }
    };
    doFetch();
    // eslint-disable-next-line consistent-return
    return () => {
      abortController.abort();
    };
  }, [url, options]);

  return { response, err, fetchLoading };
};
export default useFetch;
