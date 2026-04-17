import useFoodSearch from "../hooks/useFoodSearch";
import ProductCard from "../components/ProductCard";

function HomePage({ dispatch }) {
  const { results, loading, error, searchFood } = useFoodSearch();

  return (
    <div>
      <h2>Search Food</h2>

      <input
        type="text"
        placeholder="Search..."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            searchFood(e.target.value);
          }
        }}
      />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {results.map((item) => (
        <ProductCard key={item.code} product={item} dispatch={dispatch} />
      ))}
    </div>
  );
}

export default HomePage;