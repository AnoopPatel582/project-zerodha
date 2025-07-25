function Hero() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row ">
                <div className="mt-5 text-center mb-5">
                    <h1 className="fs-3">Charges</h1>
                    <h3 className=" mt-3 fs-4 text-muted mb-5" style={{fontWeight:"400"}}>List of all charges and taxes</h3>
                </div>
            </ div>
            <div className="row text-center mt-5">
                <div className="col-4">
                    <img src="media/images/pricingEquity.svg" alt="pricing" style={{width:"80%"}}/>
                    <h2>Free equity delivery</h2>
                    <p className="text-muted mt-4">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4">
                    <img src="media/images/intradayTrades.svg" alt="pricing" style={{width:"80%"}}/>
                    <h2>Intraday and F&O trades</h2>
                    <p className="text-muted mt-4">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4">
                    <img src="media/images/pricing0.svg" alt="pricing" style={{width:"80%"}}/>
                    <h2>Free direct MF</h2>
                    <p className="text-muted mt-4">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;