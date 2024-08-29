import { useCart } from '../contexts/CartContext';

const CartItem = ({ item }) => {
    const { removeFromCart, updateQuantity } = useCart();

    const handleQuantityChange = (e) => {
        updateQuantity(item.id, e.target.value);
    };

    return (
        <div className="cart-item">
            <div className="cart-item-img">
                <img src={`src/images/food/${item.image_name}`} alt={item.title} className="img-responsive img-curve" />
            </div>
            <div className="cart-item-desc">
                <h4>{item.title}</h4>
                <p className="food-price">${(item.price * item.quantity).toFixed(2)}</p>
                <p className="food-detail">{item.description}</p>
                <div className="quantity">
                    <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                    <input
                        type="number"
                        id={`quantity-${item.id}`}
                        value={item.quantity}
                        min="1"
                        onChange={handleQuantityChange}
                    />
                </div>
            </div>
            <div className="cart-item-remove">
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
        </div>
    );
};

export default CartItem;
