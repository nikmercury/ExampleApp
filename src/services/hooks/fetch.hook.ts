import { useCallback, useEffect, useState } from 'react';
import { AppConfig } from '../../constants';

type FetchResult<T> = {
  data: T | undefined | null;
  loading: boolean;
  refetch(): Promise<void>;
};

export function useFetch<T>(url: string): FetchResult<T> {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`${AppConfig.API_URL}${url}`);
      setData(await response.json());
    } catch (e) {
      // commented console.error due to unavailable example domain
      //console.error(e);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    loading,
    refetch: fetchData,
  };
}
