import { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  CircularProgress,
  Box,
  Button
} from "@mui/material";

import useFoodSearch from "../hooks/useFoodSearch";
import ProductCard from "../components/ProductCard";

function HomePage() {
  const [query, setQuery] = useState("");
  const { results, loading, error, searchFood } = useFoodSearch();

  const handleSearch = () => {
    searchFood(query);
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Search Food
      </Typography>

      <TextField
        fullWidth
        label="Search..."
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* 🔥 ADD SEARCH BUTTON */}
      <Button
        variant="contained"
        sx={{ mt: 2 }}
        onClick={handleSearch}
      >
        Search
      </Button>

      {loading && (
        <Box sx={{ mt: 3 }}>
          <CircularProgress />
        </Box>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}

      <Box
        sx={{
          marginTop: 4,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 3,
        }}
      >
        {results.map((item) => (
          <ProductCard key={item.code} product={item} />
        ))}
      </Box>
    </Container>
  );
}

export default HomePage;