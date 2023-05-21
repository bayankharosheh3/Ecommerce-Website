import "./App.css";
import ProductsProvider from "./components/ProductsProvider";
import Router from "./Router";
// import HomePage from "./views/HomePage";
// import ProductsList from "./views/ProductsList";

function App() {
  return (
    <ProductsProvider>
      <Router />
    </ProductsProvider>
  );
}

export default App;
