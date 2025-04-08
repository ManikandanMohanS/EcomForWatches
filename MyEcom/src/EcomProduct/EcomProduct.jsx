import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./EcomProduct.module.css";
import MyCard from "../MyCard/MyCard";
import EcomNav from "../EcomNav/EcomNav";

const EcomProduct = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/getdata")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError("Failed to load products.");
        setLoading(false);
      });
  }, []);

  const addToCart = (id) => {
    const selectedProduct = products.find((p) => p._id === id);
    setCart([...cart, selectedProduct]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((product) => product._id !== id));
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div>
      {/* Navbar with Dynamic View */}
      <EcomNav toggleCart={toggleCart} cartCount={cart.length} isCartPage={showCart} />

      {/* Show MyCard Page Only */}
      {showCart ? (
        <MyCard cart={cart} removeFromCart={removeFromCart} />
      ) : (
        // Show Product Page When Not in Cart Mode
        <div className={styles.container} id="mycollect">
          <h2 className={styles.title}>Our Collections</h2>

          {/* Category Buttons */}
          <div className={styles.categoryButtons}>
            {["all", "mens", "womens"].map((cat) => (
              <button
                key={cat}
                className={`${styles.categoryBtn} ${category === cat ? styles.active : ""}`}
                onClick={() => setCategory(cat)}
              >
                {cat === "all" ? "All Watches" : cat === "mens" ? "Men's Watches" : "Women's Watches"}
              </button>
            ))}
          </div>

          {/* Error / Loading State */}
          {loading && <p>Loading products...</p>}
          {error && <p className={styles.error}>{error}</p>}

          {/* Product Grid */}
         {/* Product Grid */}
<div className={styles.productsGrid}>
  {products
    .filter((product) => category === "all" || product.category === category)
    .map((product) => (
      <div key={product._id} className={styles.productCard}>
        <img src={product.image} alt={product.name} className={styles.productImage} />
        <div className={styles.productInfo}>
          <h3 className={styles.productName}>{product.name}</h3>
          <p className={styles.productPrice}>₹{product.price}</p>
          <button className={styles.addToCartBtn} onClick={() => addToCart(product._id)}>
            Add to Cart
          </button>
        </div>
      </div>
    ))}
</div>

        </div>
      )}
    </div>
  );
};

export default EcomProduct;
