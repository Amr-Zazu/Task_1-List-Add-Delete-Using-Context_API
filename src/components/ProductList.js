import React, { useContext } from "react";
import Swal from "sweetalert2";

import { Typography } from "antd";

import { Link } from "react-router-dom";
import { ProductsContext, SetProductsContext } from "../context/ProductsConext";
const { Title } = Typography;

function ProductList() {
  const products = useContext(ProductsContext);
  const setProducts = useContext(SetProductsContext);

  const deleteProduct = (product) => {
    Swal.fire({
      title: `Are you sure you want to delete this product "${product.title}" ?`,
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        products.splice(products.indexOf(product), 1);
        setProducts((old) => [...old]);
      }
    });
  };

  return (
    <>
      <div className="container">
        <Title className="mt-3">Products List</Title>
        <table className="table table-striped mt-3 products-table border">
          <thead>
            <tr>
              <th className="fs-3">Title</th>
              <th className="fs-3">Price</th>
              <th className="fs-3">Operations</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product.price}>
                  <td className="fs-4">{product.title}</td>
                  <td className="fs-4">{product.price}$</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm m-2 fs-6 fw-bold"
                      onClick={() => deleteProduct(product)}
                    >
                      Delete This Product
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <Link className="btn btn-success mt-3 fs-4 mt-4" to="/add-product">
          Add New Product
        </Link>
      </div>
    </>
  );
}

export default ProductList;
