import { useNavigate } from "react-router-dom";

function ProductCard({ product, dispatch }) {
  const navigate = useNavigate();

  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3 onClick={() => navigate(`/product/${product.code}`)}>
        {product.product_name || "No Name"}
      </h3>

      <button
        onClick={() =>
          dispatch({ type: "ADD", payload: product })
        }
      >
        Save
      </button>
    </div>
  );
}

export default ProductCard;