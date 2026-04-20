import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button
} from "@mui/material";

function DetailPage() {
  const { barcode } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError("");

        // ✅ FIXED API CALL
        const res = await axios.get(
          `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`
        );

        if (res.data.status === 1) {
          setProduct(res.data.product);
        } else {
          setError("Product not found");
        }
      } catch (err) {
        console.error(err);
        setError("Failed to fetch product");
      } finally {
        setLoading(false);
      }
    };

    if (barcode) fetchProduct();
  }, [barcode]);

  if (loading) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography color="error">{error}</Typography>
        <Button sx={{ mt: 2 }} onClick={() => navigate(-1)}>
          Back
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Button sx={{ mb: 2 }} onClick={() => navigate(-1)}>
        Back
      </Button>

      <Card>
        {product?.image_url && (
          <CardMedia
            component="img"
            height="300"
            image={product.image_url}
            alt={product?.product_name}
          />
        )}

        <CardContent>
          <Typography variant="h4" gutterBottom>
            {product?.product_name || "No Name"}
          </Typography>

          <Typography>
            <b>Barcode:</b> {product?.code || barcode}
          </Typography>

          <Typography>
            <b>Brand:</b> {product?.brands || "N/A"}
          </Typography>

          <Typography>
            <b>Category:</b> {product?.categories || "N/A"}
          </Typography>

          <Typography>
            <b>Quantity:</b> {product?.quantity || "N/A"}
          </Typography>

          <Typography>
            <b>Country:</b> {product?.countries || "N/A"}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default DetailPage;