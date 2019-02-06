import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

export default class Product extends Component {
  render() {
    const { id, titile, img, price, incart } = this.props.product;
    return (
      <ProductWrapper className="col-9  col-md-4 col-lg-3 my-3">
        <div className="card">
          <div
            className="img-container p-5 "
            onClick={() => console.log("img clicked")}
          >
            <Link to="/details">
              <img src={img} alt="product" className="card-img-top" />
            </Link>
            <button
              className="cart-btn"
              disabled={incart}
              onClick={() => console.log("button click to add to cart")}
            />
          </div>
        </div>
      </ProductWrapper>
    );
  }
}


const ProductWrapper = styled.div``;
