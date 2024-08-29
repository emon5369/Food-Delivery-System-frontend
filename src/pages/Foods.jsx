import { useEffect, useState } from 'react';
import FoodCard from '../components/FoodCard';
import SearchBar from '../components/SearchBar';
import { useAuth } from '../contexts/AuthContext'; 
import { useCart } from '../contexts/CartContext';

const Foods = ({ limit }) => {
    const [foods, setFoods] = useState([]);
    const { addToCart } = useCart();
    const { isAuthenticated } = useAuth();
    const [searchQuery, setSearchQuery] = useState('');
    const [isPopupMessageOpen, setIsPopupMessageOpen] = useState(false);


    useEffect(() => {
        fetch('http://localhost/reactphp/get_foods.php')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setFoods(limit ? data.slice(0, limit) : data);
            })
            .catch(error => {
                console.error('There was an error fetching the food data!', error);
            });
    }, [limit]);

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const filteredFoods = foods.filter(food =>
        food.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSignInRequest = () => setIsPopupMessageOpen(true);
    const handlePopupClose = () => setIsPopupMessageOpen(false);


    return (
        <div className="food-menu">
            <div className="container">
                <h2 className="text-center">Food Menu</h2>
                <SearchBar onSearch={handleSearch} />
                {filteredFoods.length > 0 ? (
                    filteredFoods.map(food => (
                        <FoodCard
                            key={food.id}
                            image={`images/food/${food.image_name}`}
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
                    <div className="error">Food not found.</div>
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

export default Foods;
