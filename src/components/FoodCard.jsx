function FoodCard({ product }) {
  return (
    <div className="card">
      <img
        src={
          product.image_front_thumb_url ||
          "https://via.placeholder.com/150"
        }
        alt={product.product_name || "No image"}
      />

      <h3>
        {product.product_name || product.product_name_en || "No name"}
      </h3>

      <p>{product.brands || "Unknown brand"}</p>

      <ul>
        <li>Calories: {product.nutriments?.energy_kcal || "N/A"}</li>
        <li>Protein: {product.nutriments?.proteins || "N/A"} g</li>
        <li>Fat: {product.nutriments?.fat || "N/A"} g</li>
      </ul>
    </div>
  );
}

export default FoodCard;