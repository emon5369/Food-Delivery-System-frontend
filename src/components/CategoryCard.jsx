import { Link } from 'react-router-dom';

const CategoryCard = ({ image, title, link }) => {
    return (
        <Link to={link}>
            <div className="category-box float-container">
                {image ? (
                    <img src={image} alt={title} className="img-responsive img-curve" />
                ) : (
                    <div className="error">Image not Available.</div>
                )}
                <h3 className="float-text text-center text-white">{title}</h3>
            </div>
        </Link>
    );
};

export default CategoryCard;
