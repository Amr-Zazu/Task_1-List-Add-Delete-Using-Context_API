import { createContext, useState } from "react";

export const ProductsContext = createContext();
export const SetProductsContext = createContext();

export const TitleContext = createContext();
export const SetTitleContext = createContext();

export const PriceContext = createContext();
export const SetPriceContext = createContext();

function ProductsProvider(props) {
  const [products, SetProducts] = useState([
    { title: "Product 1", price: "500" },
    { title: "Product 2", price: "1000" },
  ]);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  return (
    <>
      <ProductsContext.Provider value={products}>
        <SetProductsContext.Provider value={SetProducts}>
          <TitleContext.Provider value={title}>
            <SetTitleContext.Provider value={setTitle}>
              <PriceContext.Provider value={price}>
                <SetPriceContext.Provider value={setPrice}>
                  {props.children}
                </SetPriceContext.Provider>
              </PriceContext.Provider>
            </SetTitleContext.Provider>
          </TitleContext.Provider>
        </SetProductsContext.Provider>
      </ProductsContext.Provider>
    </>
  );
}

export default ProductsProvider;
