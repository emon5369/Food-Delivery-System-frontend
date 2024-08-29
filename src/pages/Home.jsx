import { Link } from "react-router-dom"
import Categories from "./Categories"
import Foods from "./Foods"

function Home() {
    return (
        <>
            <div className="hero-container text-center">
                <img src="images/bg.jpg" alt="hero-img" />
                <div className="container">
                    <div className="hero">
                        <h5>Easy order & fast delivery</h5>
                        <h1> <span>Enjoy</span> your favorite food!</h1>
                        <img className="delivery" src="images/service-01.png" alt="delivery" />
                        <br />
                        <button className="hero-btn">
                            <Link to='/categories'><span>Menu</span></Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="home-categories">
                <Categories limit={3} />
                <p className="text-center">
                    <Link to="/categories">See All Categories {">>"} </Link>
                </p>
            </div>

            <div className="home-menu">
                <Foods limit={4} />
                <p className="text-center">
                    <Link to="/foods">See All Foods {">>"} </Link>
                </p>
            </div>
        </>
    )
}

export default Home