import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Header.css';
import PopupSignIn from './PopupSignIn';
import PopupMyAccount from './PopupMyAccount';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';

function Header() {
    const [isPopupSignInOpen, setIsPopupSignInOpen] = useState(false);
    const [isPopupMyAccountOpen, setIsPopupMyAccountOpen] = useState(false);
    const { isAuthenticated, signIn, signOut } = useAuth(); 
    const [profile, setProfile] = useState(null);
    const { cartItems, clearCart } = useCart();

    useEffect(() => {
        const token = localStorage.getItem('userToken');
        if (token && !profile) {
            fetchUserProfile(token);
        }
    }, [isAuthenticated]);

    const fetchUserProfile = async (token) => {
        const response = await fetch('http://localhost/reactphp/profile.php', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        if (data.status === 'success') {
            setProfile(data.user);
        }
    };

    const handleSignInClick = () => setIsPopupSignInOpen(true);
    const handleMyAccountClick = () => setIsPopupMyAccountOpen(true);
    const handleClosePopupSignIn = () => setIsPopupSignInOpen(false);
    const handleClosePopupMyAccount = () => setIsPopupMyAccountOpen(false);

    const handleSignIn = (user) => {
        signIn();
        setProfile(user);
        setIsPopupSignInOpen(false);
    };

    const handleLogout = () => {
        signOut();
        setProfile(null);
        clearCart();
        setIsPopupMyAccountOpen(false);
    };

    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <Link to="/" title="Logo">
                        <img src="src/images/logo.png" alt="Restaurant Logo" className="img-responsive" />
                    </Link>
                </div>

                <div className="menu text-center">
                    <ul>
                        <li>
                            <NavLink to="/" className={({ isActive }) => (isActive ? "act" : "")}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/categories" className={({ isActive }) => (isActive ? "act" : "")}>
                                Categories
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/foods" className={({ isActive }) => (isActive ? "act" : "")}>
                                Foods
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({ isActive }) => (isActive ? "act" : "")}>
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="actions">
                    <div className="cart">
                        <NavLink to="/cart" className={({ isActive }) => (isActive ? "act" : "")}>
                            <FontAwesomeIcon icon={faShoppingCart} /> Cart
                        </NavLink>
                        {cartItems.length > 0 && <div className="dot"></div>}
                    </div>
                    {isAuthenticated ? (
                        <button className="sign-in" onClick={handleMyAccountClick}>
                            <FontAwesomeIcon icon={faUser} /> My Account
                        </button>
                    ) : (
                        <button className="sign-in" onClick={handleSignInClick}>
                            <FontAwesomeIcon icon={faSignInAlt} /> Sign In
                        </button>
                    )}
                </div>

                <div className="clearfix"></div>
            </div>

            <PopupSignIn isOpen={isPopupSignInOpen} onClose={handleClosePopupSignIn} onSignIn={handleSignIn} />
            <PopupMyAccount isOpen={isPopupMyAccountOpen} onClose={handleClosePopupMyAccount} onLogout={handleLogout} profile={profile} />
        </div>
    );
}

export default Header;
