import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

const ProductItem = ({ produitProps, handleClick }) => {
  return (
    <tr>
      <td>
        {" "}
        <Button
          onClick={() => handleClick(produitProps.name)}
          variant="outline-warning"
        >
          clickme
        </Button>{" "}
      </td>
      <td>
        {" "}
        <img src={produitProps.imgSrc} alt="" />{" "}
      </td>
      <td> {produitProps.name}</td>
      <td>{produitProps.price}</td>
    </tr>
  );
};
ProductItem.propTypes = {
  produitProps: PropTypes.object,
  handleClick: PropTypes.func,
};

export default ProductItem;
