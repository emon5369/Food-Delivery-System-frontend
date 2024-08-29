import { useEffect, useState } from 'react';
import CategoryCard from '../components/CategoryCard';
import '../Styles/Categories.css';

const Categories = ({limit}) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost/reactphp/get_categories.php')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (limit) {
                    setCategories(data.slice(0, limit));
                } else {
                    setCategories(data);
                }
            })   
            .catch(error => {
                console.error('There was an error fetching the categories data!', error);
            });
    }, []);

    return (
        <div className="categories">
            <div className="container">
                <h2 className="text-center">Explore Foods</h2>
                <h3 className="text-center">Choose your favourite category!</h3>
                {categories.length > 0 ? (
                    categories.map(category => (
                        <CategoryCard
                            key={category.id}
                            image={`images/category/${category.image_name}`}
                            title={category.title}
                            link={`/categories/:${category.id}`}
                        />
                    ))
                ) : (
                    <div className="error">Categories not found.</div>
                )}
                <div className="clearfix"></div>
            </div>
        </div>
    );
};

export default Categories;
