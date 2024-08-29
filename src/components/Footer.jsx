import '../Styles/Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="foot-container">

                <div className="col">
                    <img className="foot-logo" src="images/logo.png" alt="brand" />
                    <h4>Contact Us</h4>
                    <p><strong>Address:</strong> Dhanmondi, Dhaka-1205</p>
                    <p><strong>Phone:</strong> +880 1234567890</p>
                    <p><strong>Hours:</strong> 08:00am - 02:00am, Sun-Fri</p>
                </div>
                <div className="col">
                    <h4>About</h4>
                    <a href="#">About Us</a>
                    <a href="#">Delivery Info</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Contact Us</a>
                </div>
                <div className="col">
                    <h4>My Account</h4>
                    <a href="#">Sign In</a>
                    <a href="#">View Cart</a>
                    <a href="#">My Wishlist</a>
                    <a href="#">Track MY Order</a>
                    <a href="#">Help</a>
                </div>
                <div>
                    <div className="follow">
                        <h4>Follow Us</h4>
                        <div className="icon">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-pinterest-p"></i>
                            <i className="fab fa-youtube"></i>
                        </div>
                    </div>
                    <div className="install">
                        <h4>Install App</h4>
                        <p>From App Store or Google Play</p>
                        <div className="row">
                            <img src="images\pay\app.jpg" alt="app store" />
                            <img src="images\pay\play.jpg" alt="play store" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <p>© All rights reserved; August 2024</p>
            </div>
        </div>
    )
}

export default Footer