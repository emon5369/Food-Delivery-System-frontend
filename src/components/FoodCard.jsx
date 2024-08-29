import { useState } from 'react';
import '../Styles/FoodCard.css';
import { useAuth } from '../contexts/AuthContext';

const FoodCard = ({ image, title, price, description, food, addToCart, onSignInRequest }) => {
    const [addedToCart, setAddedToCart] = useState(false);  //notification
    const { isAuthenticated } = useAuth();

    const handleAddToCart = () => {
        if (!isAuthenticated) {
            onSignInRequest(); // Request sign-in if not authenticated
        } else {
            addToCart(food);
            setAddedToCart(true);
    
            setTimeout(() => {
                setAddedToCart(false);
            }, 2000);
        }
        
    };

    return (
        <div className="food-menu-box">
            <div className="food-menu-img">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="img-responsive img-curve"
                    />
                ) : (
                    <div className="error">Image not Available.</div>
                )}
            </div>

            <div className="food-menu-desc">
                <h4>{title}</h4>
                <p className="food-price">${price}</p>
                <p className="food-detail">
                    {description}
                </p>
                <br />
                <button className="btn btn-primary" onClick={handleAddToCart}>
                    Add to Cart
                </button>
                {addedToCart && (
                    <div className={`cart-notification ${addedToCart ? 'show' : ''}`}>
                        Added to Cart ✓
                    </div>
                )}
            </div>
        </div>
    );
};

export default FoodCard;
