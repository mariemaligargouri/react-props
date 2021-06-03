import React from "react";
import { Table } from "react-bootstrap";
import ProductItem from "../productItem/ProductItem";
import PropTypes from "prop-types";

const ProductList = ({ produits }) => {
  const handleClick = (name) => {
    alert(`this product is ${name}`);
  };
  return (
    <Table striped bordered hover className="container">
      <thead>
        <tr>
          <th>#</th>
          <th>Product</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {produits.map((el, index) => (
          <ProductItem
            key={index}
            produitProps={el}
            handleClick={handleClick}
          />
        ))}
      </tbody>
    </Table>
  );
};
ProductList.propTypes = {
  produits: PropTypes.array,
};
export default ProductList;
