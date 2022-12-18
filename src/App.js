import Products from "./components/Products";
import { ProductContextProvider } from "./context/productContext";

function App() {
  return (
    <>
      <ProductContextProvider>
        <Products />
      </ProductContextProvider>
    </>
  );
}

export default App;
