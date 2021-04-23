import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <div className="navbar-left">
        <h2>
          Lucky<span className="logo-yellow">Number</span>
        </h2>
      </div>
      <div className="navbar-right">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/about" className="navbar-link">
          About
        </Link>
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 18px;
  font-family: "Nunito";

  .logo-yellow {
    color: #fcac17;
  }

  .navbar-link {
    padding: 0.5em 1em;
  }

  a {
    color: #6880a0;
    text-decoration: none;
    font-weight: medium;
  }

  a:hover {
    color: #334861;
  }
`;
