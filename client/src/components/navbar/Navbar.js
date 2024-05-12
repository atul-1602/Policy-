import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Cart from "../cart/Cart";

function Navbar() {
  const [userLoggedIn, setUserLoggedIn] = React.useState(localStorage.getItem('userLoggedIn') === "true");
  const [adminLoggedIn, setAdminLoggedIn] = React.useState(localStorage.getItem('adminLoggedIn') === "true");

  console.log(localStorage.getItem('userLoggedIn'));
  console.log(localStorage.getItem('adminLoggedIn'));
  console.log(adminLoggedIn);
  console.log(userLoggedIn);

  const handleLogout = () => {
    localStorage.setItem("adminLoggedIn", "false");
    localStorage.setItem("userLoggedIn", "false");
    setAdminLoggedIn(false);
    setUserLoggedIn(false);
    window.location.href = "/login";
  };

  return (
    <>
    <AppBar position="sticky" style={{ top: 0, zIndex: 1000, width: "100%" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            >
            Policy <span >+</span>

          </Typography>

          <Link to="/">
            <Button style={{ color: "white", marginLeft: "80px" }}>Home</Button>
          </Link>
          <Link to="/policies">
            <Button style={{ color: "white", marginLeft: "40px" }}>Policies</Button>
          </Link>
          <Link to="/about">
            <Button style={{ color: "white", marginLeft: "40px" }}>About Us</Button>
          </Link>
          <Link to="/contact">
            <Button style={{ color: "white", marginLeft: "40px" }}>Contact</Button>
          </Link>

          {userLoggedIn && (
            <>
              <Button style={{ color: "white", marginLeft: "400px" }}> Welcome back Atul !</Button>
              <Button variant="contained" color="error" style={{ marginLeft: "10px" }} onClick={handleLogout}>
                Logout
              </Button>
              <Cart/>
            </>
          )}

          {adminLoggedIn && (
            <>
              <Button style={{ color: "white", marginLeft: "400px" }}> Welcome back Admin !</Button>
              <Button variant="contained" color="error" style={{ color: "white", marginLeft: "10px" }} onClick={handleLogout}>
                Logout
              </Button>
              <Cart/>
            </>
          )}

          {!adminLoggedIn && !userLoggedIn && (
            <Link to="/login">
              <Button style={{ color: "white", marginLeft: "600px" }}>Login</Button>
            </Link>
          )}
    
        </Toolbar>
      </Container>
    </AppBar>
          </>
  );
}

export default Navbar;
