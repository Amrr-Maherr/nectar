import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchData(url,productsNumber) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://ecommerce.routemisr.com/api/v1/${url}`
        );
        setData(response.data.data.slice(0,productsNumber));
      } catch (err) {
        setError(err);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}
