import { useState } from 'react';
import '../Styles/Contact.css';
const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isPopupMessageOpen, setIsPopupMessageOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost/reactphp/contact.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.status === 'success') {
                setIsPopupMessageOpen(true);
            } else {
                console.log('Failed to send message. Please try again.');
            }

            setFormData({
                name: '',
                email: '',
                message: '',
            });
        } catch (error) {
            console.error('Error:', error);
            console.log('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="contact-us-container">

            <div className="text-center">
                <h6 >Contact Us</h6>
                <img src="src\images\service-03.png" alt="food" />
            </div>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
            {isPopupMessageOpen && (
                <div className="popup-msg">
                    <div className="msg-content">
                        <p>Thank you for contacting us! We will get back to you shortly.</p>
                        <button onClick={() => setIsPopupMessageOpen(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactUs;
