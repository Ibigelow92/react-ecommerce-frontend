import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return <div className="App">
    {/* We need to wrap everything in shopcontextprovider so that everything within 
    will have access to whatever we put into the value of the provider */}
    <ShopContextProvider>
      <Router>
      {/* Whatever you put here is present
      in every single route */}
        <Navbar />
        <Routes>
        {/* Whatever you put in here changes
        depending on which route you're in */}
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </Router>
    </ShopContextProvider>
  </div>
}

export default App;