import '../Styles/MyAccount.css';

const PopupMyAccount = ({ isOpen, onClose, onLogout, profile }) => {
    if (!profile) return null; // Render nothing if no profile data

    return (
        <div className={`account ${isOpen ? 'show' : ''}`}>
            <div className="popup-content">
                <span className="close" onClick={onClose}>&times;</span>
                <div className="form-container">
                    <h2>My Account</h2>
                    <div className="profile-info">
                        <p><strong>Name:</strong> {profile.name}</p>
                        <p><strong>Contact:</strong> {profile.contact}</p>
                        <p><strong>Email:</strong> {profile.email}</p>
                        <p><strong>Address:</strong> {profile.address}</p>
                    </div>
                    <button onClick={onLogout}>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default PopupMyAccount;
