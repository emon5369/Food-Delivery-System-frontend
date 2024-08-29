import { useState } from 'react';
import '../Styles/SignIn.css';

const PopupSignIn = ({ isOpen, onClose, onSignIn }) => {
    const [isSignUp, setIsSignUp] = useState(false);

    const handleToggle = () => setIsSignUp(!isSignUp);

    const handleSignInSubmit = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        const response = await fetch('http://localhost/reactphp/signin.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        if (data.status === 'success') {
            const profileResponse = await fetch('http://localhost/reactphp/profile.php', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${data.user.id}` 
                }
            });

            const profileData = await profileResponse.json();
            if (profileData.status === 'success') {
                alert('Sign-in successful!');
                localStorage.setItem('userToken', data.user.id);
                onSignIn(profileData.user);
            } else {
                alert('Failed to fetch profile info.');
            }
        } else {
            alert(data.message);
        }
    };

    const handleSignUpSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const contact = event.target.contact.value;
        const email = event.target.email.value;
        const address = event.target.address.value;
        const password = event.target.password.value;

        const response = await fetch('http://localhost/reactphp/signup.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, contact, email, address, password })
        });

        const data = await response.json();
        if (data.status === 'success') {
            alert('Sign-up successful! Please sign in.');
            setIsSignUp(false);
        } else {
            alert(data.message);
        }
    };

    return (
        <div className={`popup ${isOpen ? 'show' : ''}`}>
            <div className="popup-content">
                <span className="close" onClick={onClose}>&times;</span>
                {isSignUp ? (
                    <div className="form-container">
                        <h2>Sign Up</h2>
                        <form onSubmit={handleSignUpSubmit}>
                            <input type="text" name="name" placeholder="Name" required />
                            <input type="text" name="contact" placeholder="Contact" required />
                            <input type="email" name="email" placeholder="Email" required />
                            <input type="text" name="address" placeholder="Address" required />
                            <input type="password" name="password" placeholder="Password" required />
                            <button type="submit">Sign Up</button>
                        </form>
                        <p>Already have an account? <a href="#" onClick={handleToggle}>Sign In</a></p>
                    </div>
                ) : (
                    <div className="form-container">
                        <h2>Sign In</h2>
                        <form onSubmit={handleSignInSubmit}>
                            <input type="email" name="email" placeholder="Email" required />
                            <input type="password" name="password" placeholder="Password" required />
                            <button type="submit">Sign In</button>
                        </form>
                        <p>{"Don't"} have an account? <a href="#" onClick={handleToggle}>Sign Up</a></p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PopupSignIn;
