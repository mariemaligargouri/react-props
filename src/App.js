import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/productList/ProductList";
import Footer from "./components/footer/Footer";

function App() {
  const products = [
    {
      imgSrc:
        "https://s.alicdn.com/@sc01/kf/Hc72f3726c52c459a8c9d68be9cea111eF.jpg_300x300.jpg",
      name: "AirPods",
      price: `6,99 $`,
    },
    {
      imgSrc: `https://s.alicdn.com/@sc01/kf/Hdfd49d641a21425b980735a170a9de89K.jpg_300x300.jpg`,
      name: "Smart watch",
      price: `8,64 $`,
    },
    {
      imgSrc:
        "https://s.alicdn.com/@sc01/kf/H06b8a5528adc413b8f4eeef65d889acfK.jpg_300x300.jpg",
      name: "Iphone 11 ",
      price: `150 $`,
    },
  ];
  return (
    <div className="App">
      <h1>a9wa groupe</h1>
      <ProductList produits={products} />
      <Footer total="500$" >
        <h6> thank's dear students </h6>
        <p> workshop </p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDAYhksnCUrB_jBzQ6JLj5WkYZ-8D9HNIWrQ&usqp=CAU"
          alt=""
        />
      </Footer>
    </div>
  );
}

export default App;
