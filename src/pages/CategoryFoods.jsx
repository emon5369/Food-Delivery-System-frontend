import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FoodCard from '../components/FoodCard';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

const CategoryFoods = () => {
    const { categoryId } = useParams();
    const [foods, setFoods] = useState([]);
    const { addToCart } = useCart();
    const { isAuthenticated } = useAuth();
    const [isPopupMessageOpen, setIsPopupMessageOpen] = useState(false);

    useEffect(() => {
        fetch(`http://localhost/reactphp/get_foods.php`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setFoods(data);
            })
            .catch(error => {
                console.error('There was an error fetching the food data!', error);
            });
    }, [categoryId]);

    const cleanedCategoryId = categoryId.replace(/[^0-9]/g, ''); //remove the colon

    const filteredFoods = foods.filter(food => food.category_id === cleanedCategoryId);

    const handleSignInRequest = () => setIsPopupMessageOpen(true);
    const handlePopupClose = () => setIsPopupMessageOpen(false);

    return (
        <div className="food-menu">
            <div className="container">
                <h2 className="text-center">Available on this Category</h2>
                {filteredFoods.length > 0 ? (
                    filteredFoods.map(food => (
                        <FoodCard
                            key={food.id}
                            image={`../images/food/${food.image_name}`} 
                            //used .. before /images for nested route
                            //alternate: absolute path `/images/food/${food.image_name}`
                            title={food.title}
                            price={food.price}
                            description={food.description}
                            food={food}
                            addToCart={addToCart}
                            isAuthenticated={isAuthenticated}
                            onSignInRequest={handleSignInRequest}
                        />
                    ))
                ) : (
                    <div className="error"><h6>Sorry! No food available on this category.</h6></div>
                )}
                <div className="clearfix"></div>
            </div>

            {isPopupMessageOpen && (
                <div className="popup-msg">
                    <div className="msg-content">
                        <p>Please login to order!</p>
                        <button onClick={handlePopupClose}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CategoryFoods;
