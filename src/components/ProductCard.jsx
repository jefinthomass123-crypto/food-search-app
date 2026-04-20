import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/savedSlice";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const id = product.code || product.id;

  return (
    <Card sx={{ maxWidth: 300 }}>
      {product?.image_url && (
        <CardMedia
          component="img"
          height="180"
          image={product.image_url}
          alt={product?.product_name || "product"}
        />
      )}

      <CardContent>
        <Typography variant="h6">
          {product?.product_name || "No Name"}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {product?.brands || "No Brand"}
        </Typography>

        {/* ✅ SAVE BUTTON */}
        <Button
          variant="contained"
          color="success"
          sx={{ mt: 1, mr: 1 }}
          onClick={() => dispatch(addItem(product))}
        >
          Save
        </Button>

        {/* VIEW DETAILS */}
        <Button
          variant="outlined"
          sx={{ mt: 1 }}
          onClick={() => navigate(`/product/${id}`)}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;