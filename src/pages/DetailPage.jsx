import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function DetailPage() {
  const { barcode } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await axios.get(
          `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`
        );

        if (mounted) {
          setProduct(res.data.product);
        }
      } catch (err) {
        if (mounted) {
          setError("Failed to fetch product");
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchProduct();

    return () => {
      mounted = false; // cleanup
    };
  }, [barcode]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => navigate(-1)}>⬅ Back</button>

      <h2>{product?.product_name || "No Name"}</h2>

      {product?.image_url && (
        <img src={product.image_url} alt="product" width="200" />
      )}

      <p><strong>Brand:</strong> {product?.brands || "N/A"}</p>
      <p><strong>Category:</strong> {product?.categories || "N/A"}</p>
      <p><strong>Quantity:</strong> {product?.quantity || "N/A"}</p>
      <p><strong>Country:</strong> {product?.countries || "N/A"}</p>
    </div>
  );
}

export default DetailPage;