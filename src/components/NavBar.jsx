import { AppBar, Toolbar, Typography, Button, Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  const saved = useSelector((state) => state.saved);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Food App
        </Typography>

        <Button color="inherit" component={Link} to="/">
          Home
        </Button>

        <Badge badgeContent={saved.length} color="secondary">
          <Button color="inherit" component={Link} to="/saved">
            Saved
          </Button>
        </Badge>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;