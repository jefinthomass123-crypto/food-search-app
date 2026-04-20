import { Container, Typography, Button, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../redux/slices/savedSlice";

function SavedPage() {
  const dispatch = useDispatch();

  // ✅ GET FROM REDUX (NOT PROPS)
  const saved = useSelector((state) => state.saved);

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Saved Items
      </Typography>

      {saved.length === 0 ? (
        <Typography>No saved items</Typography>
      ) : (
        saved.map((item) => (
          <Box
            key={item.code}
            sx={{
              border: "1px solid #ccc",
              padding: 2,
              marginBottom: 2,
              borderRadius: 2,
            }}
          >
            <Typography variant="h6">
              {item.product_name || "No Name"}
            </Typography>

            <Button
              variant="contained"
              color="secondary"
              sx={{ marginTop: 1 }}
              onClick={() => dispatch(removeItem(item.code))}
            >
              Remove
            </Button>
          </Box>
        ))
      )}
    </Container>
  );
}

export default SavedPage;