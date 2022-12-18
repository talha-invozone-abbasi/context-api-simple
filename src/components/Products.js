import React, { useContext, useEffect } from "react";
import { ProductContext } from "../context/productContext";

const Products = () => {
  const { getAllproducts, products, getSinlgeProject } =
    useContext(ProductContext);
  useEffect(() => {
    getAllproducts();
  }, []);

  return (
    <div>
      {products?.map((e, i) => (
        <h1 key={i} onClick={() => getSinlgeProject(e?.id)}>
          {e?.title}
        </h1>
      ))}
    </div>
  );
};

export default Products;
