import { useState } from "react";
import axios from "axios";

export default function useFoodSearch() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchFood = async (query) => {
    if (!query || query.length < 2) {
      setError("Enter at least 2 characters");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await axios.get(
        "https://world.openfoodfacts.org/cgi/search.pl",
        {
          params: {
            search_terms: query,
            json: 1,
          },
        }
      );

      setResults(res.data.products);
    } catch {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  return { results, loading, error, searchFood };
}