import { Link } from "react-router-dom";

function ProceedOrder() {
    return (
        <div className="text-center">
            <h6>Thank You!</h6>
            <img src="src\images\service-01.png" alt="delivery" />
            <h3>Your Order will be delivered soon...</h3>
            <br />
            <button className="hero-btn">
                <Link to='/'><span>Return Home</span></Link>
            </button>
        </div>
    )
}

export default ProceedOrder