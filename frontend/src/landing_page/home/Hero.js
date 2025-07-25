import "../../index.css";

function Hero() {
    return ( 
        <div className="conatainer p-5 mb-2" style={{ backgroundColor: "#f8f9fa" }}>
            <div className="row text-center">
                <img src="media/images/homeHero.png" alt="Hero Image" className="mb-5" />
                <h1 className="mt-5 fs-2">Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className="p-2 btn btn-primary homeherobtn fs-5 fw-semibold" >Signup Now</button>
            </div>

        </div>
     );
}

export default Hero;