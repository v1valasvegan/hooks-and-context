import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import BASE_URL from '../common/constants';

export default function useLoader(path) {
  const [data, saveData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const { data: respData } = await axios.get(`${BASE_URL}/${path}`);
      saveData(respData);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }, [path]);

  useEffect(() => {
    load();
  }, [load]);
  return [data, loading, setLoading, load, error, setError];
}
