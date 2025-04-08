import { useState } from "react";
import styles from "./MyCard.module.css";

const MyCard = ({ cart, removeFromCart }) => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  const handlePayment = () => {
    setPaymentSuccess(true);
  };

  const closePaymentPopup = () => {
    setPaymentSuccess(false);
  };

  return (
    <div className={styles.cartContainer}>
      <h2>My Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className={styles.cartList}>
            {cart.map((item, index) => (
              <li key={index} className={styles.cartItem}>
                <img src={item.image} alt={item.name} className={styles.cartImage} />
                <div>
                  <p className={styles.cartName}>{item.name}</p>
                  <p className={styles.cartPrice}>₹{item.price}</p>
                  <button className={styles.removeButton} onClick={() => removeFromCart(item._id)}>
                    ❌ Remove from Cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ₹{totalAmount}</h3>
          <button className={styles.payButton} onClick={handlePayment}>
            Pay Now
          </button>
        </>
      )}

      {/* Payment Modal */}
      {paymentSuccess && (
        <>
          <div className={styles.overlay} onClick={closePaymentPopup}></div>
          <div className={styles.paymentModal}>
            <button className={styles.closeButton} onClick={closePaymentPopup}>✖</button>
            <div className={styles.successIcon}>✅</div>
            <p>Payment Successful!</p>
          </div>
        </>
      )}
    </div>
  );
};

export default MyCard;
