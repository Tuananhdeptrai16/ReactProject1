import { Header } from "./components/header";
import { Product } from "./components/product";
import { Reviews } from "./components/reviews";
import { Feature } from "./components/feature";
import { Blog } from "./components/blog";
function App() {
  return (
    <div className="App">
      <Header />

      <Product></Product>
      <Reviews></Reviews>
      <Feature></Feature>
      <Blog></Blog>
    </div>
  );
}

export default App;
