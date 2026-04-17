import { useState } from "react";
import SearchBar from "./components/SearchBar";
import FoodList from "./components/FoodList";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    setSearched(true);

    try {
      const res = await fetch(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(query)}&json=true`
      );

      const data = await res.json();

      const validProducts = data.products
        .filter((p) => p && (p.product_name || p.product_name_en))
        .slice(0, 20);

      setProducts(validProducts);
    } catch (error) {
      console.error("Error fetching data:", error);
      setProducts([]);
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h1>🍔 Food Search App 🚀</h1>

      <SearchBar onSearch={handleSearch} />

      {!searched && <p style={{ textAlign: "center" }}>Start searching for food...</p>}

      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}

      {!loading && searched && products.length === 0 && (
        <p style={{ textAlign: "center" }}>No results found</p>
      )}

      {!loading && products.length > 0 && (
        <FoodList products={products} />
      )}
    </div>
  );
}

export default App;