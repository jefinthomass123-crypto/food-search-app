import { useState } from "react";
import axios from "axios";

export default function useFoodSearch() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchFood = async (query) => {
    if (!query || query.trim().length < 2) {
      setError("Enter at least 2 characters");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await axios.get(
        "https://world.openfoodfacts.org/api/v2/search",
        {
          params: {
            q: query,
            page_size: 20,
            fields: "product_name,code,brands,image_url",
          },
        }
      );

      console.log("API RESPONSE:", res.data);

      const products = res.data.products || [];

      setResults(products);
    } catch (err) {
      console.error("API ERROR:", err);
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  return { results, loading, error, searchFood };
}