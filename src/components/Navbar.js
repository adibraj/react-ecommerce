import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm px-sm-5">
          <Link to="/">
            <span className="fas fa-home" />
          </Link>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/" className="nav-link">
                Products
              </Link>
            </li>
          </ul>
          <div className="navbar-nav ml-auto">
          <Link to="/cart" className="nav-link">
          <ButtonContainer>
            <div className="mx-2">
            <i className="fas fa-cart-plus mr-2" />
            My cart
            </div>
            </ButtonContainer>
          </Link>
          </div>
        </nav>
      </div>
    );
  }
}

const ButtonContainer = styled.div`
font-size: 1.0rem;
border: 0.09rem solid;
transition: all 0.5s ease-in-out;
`;
