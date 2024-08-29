import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import CartItem from '../components/CartItem';
import '../Styles/Cart.css';

const Cart = () => {
    const { cartItems, clearCart } = useCart();
    const navigate = useNavigate();

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    const handleConfirmOrder = async () => {
        const totalAmount = calculateTotal();
        const token = localStorage.getItem('userToken'); 
        console.log("Token:", token);

        const response = await fetch('http://localhost/reactphp/store_order.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ cartItems, totalAmount })
        });

        const data = await response.json();

        if (data.status === 'success') {
            clearCart();
            navigate('/proceedOrder');
        } else {
            alert('Failed to place order: ' + data.message);
        }
    };

    return (
        <div className='cart-container'>
            <h1 className="text-center">Your Cart</h1>
            <div className="container">
                {cartItems.length > 0 ? (
                    <div>
                        {cartItems.map(item => (
                            <CartItem key={item.id} item={item} />
                        ))}
                        <div className="cart-total">
                            <h3>Total: ${calculateTotal()}</h3>
                            <button onClick={handleConfirmOrder} className="confirm-btn">
                                Confirm Order
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="empty">Your cart is empty!</div>
                )}
            </div>
        </div>
    );
};

export default Cart;
