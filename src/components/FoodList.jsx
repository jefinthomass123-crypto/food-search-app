import FoodCard from "./FoodCard";

function FoodList({ products }) {
  return (
    <div className="list">
      {products.map((item) => (
        <FoodCard key={item.id || item.code} product={item} />
      ))}
    </div>
  );
}

export default FoodList;