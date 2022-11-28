import "./App.css";
import "antd/dist/reset.css";
import ProductList from "./components/ProductList";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import ProductsProvider from "./context/ProductsConext";

function App() {
  return (
    <div className="App">
      <ProductsProvider>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="add-product" element={<AddProduct />} />
        </Routes>
      </ProductsProvider>
    </div>
  );
}

export default App;
