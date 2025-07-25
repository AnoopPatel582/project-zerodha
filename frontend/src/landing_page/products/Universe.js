function Universe() {
    return (
        <div className="container mt-5 d-flex flex-column">
            <div className="row ">
                <div className="mt-5 ">
                    <h1 className="fs-3 text-center">The Zerodha Universe</h1>
                    <p className="text-center mt-4" style={{ fontSize: "1.1rem" }}>Extend your trading and investment experience even further with our partner platforms</p>
                </div>
            </ div>
            <div className="row p-5 d-flex align-items-center">
                <div className="col-4 text-center">
                    <img src="media/images/zerodhaFundhouse.png" alt="zerodha Fund " style={{ width: "60%" }} />
                    <p className="mt-3 text-muted" style={{ fontSize: "0.85rem" }} >Our asset management venture<br /> that is creating simple and transparent index <br />funds to help you save for your goals </p>
                </div>
                <div className="col-4 text-center">
                    <img src="media/images/sensibullLogo.svg" alt="zerodha Fund " style={{ width: "60%" }} />
                    <p className="mt-3 text-muted" style={{ fontSize: "0.85rem" }}> Options treding plateforms that lets you<br /> create stategies, analyse positions and examine <br />data points like open interest, FII/DII, and more.</p>
                </div>
                <div className="col-4">
                    <img src="media/images/goldenpiLogo.png" alt="zerodha Fund " style={{ width: "60%" }} />
                    <p className="mt-3 text-muted">
                        Investment research platform<br />
                        that offers detailed insights on stocks,<br />
                        sectors, supply chains, and more.
                    </p>
                </div>
            </div>
            <div className="row d-flex align-items-center my-5">
                <div className="col-4 text-center">
                    <img src="media/images/streakLogo.png" alt="zerodha Fund " style={{ width: "60%" }} />
                    <p className="mt-3 text-muted" style={{ fontSize: "0.85rem" }}>
                        Systematic trading platform <br />
                        that allows you to create and backtest<br />
                        strategies without coding. </p>
                </div>
                <div className="col-4 text-center">
                    <img src="media/images/smallcaseLogo.png" alt="zerodha Fund " style={{ width: "60%" }} />
                    <p className="mt-3 text-muted" style={{ fontSize: "0.85rem" }}>
                        Thematic investing platform<br />
                        that helps you invest in diversified<br />
                        baskets of stocks on ETFs.
                    </p>
                </div>
                <div className="col-4 ">
                    <img src="media/images/dittoLogo.png" alt="zerodha Fund " style={{ width: "60%" }} />
                    <p className="mt-3 text-muted ">
                        Personalized advice on life <br />
                        and health insurance. No spam<br />
                        and no mis-selling.
                    </p>
                </div>
            </div>
            <button className="p-2 btn btn-primary homeherobtn fs-5 fw-semibold mb-5" >Sign up for free</button>
        </div >
    );
}

export default Universe;