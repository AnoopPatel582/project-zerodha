function Team() {
    return (
        <div className="container">
            <div className="row text-center ">
                <h1 className="fs-3" >People</h1>
            </div>
            <div className="row p-5 ">
                <div className=" col-5 text-center">
                    <img src="media/images/nithinKamath.jpg" alt="Nitin Kamath" className="img-fluid rounded-circle mb-3 " style={{ width: '280px', height: '280px', }} />
                    <h4 className="text-muted " >Nithin Kamath</h4>
                    <h6 className="text-muted">Founder, CEO</h6>
                </div>
                <div className=" col-7">
                    <p style={{fontSize:"1.1rem"}}>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                    <p style={{fontSize:"1.1rem"}}>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                    <p  style={{fontSize:"1.1rem"}}>Playing basketball is his zen.</p>

                    <p style={{fontSize:"1.1rem"}}>Connect on <a href="" className="text-decoration-none">Homepage</a> / <a href=""className="text-decoration-none">TradingQnA</a> / <a href=""className="text-decoration-none">Twitter</a></p>
                </div>
            </div>
        </div>
    );
}

export default Team;