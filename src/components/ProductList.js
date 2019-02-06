import React, { Component ,Fragment} from "react";
import Product from "./Product";
import { ProductConsumer } from "../context";

export default class ProductList extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <ProductConsumer>
              {hello => {
                return hello.products.map(product => {
                  return <Product key={product.id} product={product} />;
                });
              }}
            </ProductConsumer>
          </div>
        </div>
        </Fragment>
    );
  }
}
