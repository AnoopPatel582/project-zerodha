import "../../index.css";

function Hero() {
    return ( 
        <section className="container-fluid" id="supportHero">
            <div className="" id="supportWrapper">
                <h4 className="mt-3">Support Portal</h4>
                <a href="" className="mt-3">Track Tickets</a>
            </div>
            <div className="row p-5">
                <div className="col-1"></div>
                <div className="col-4 ">
                    <h1 className="fs-4" style={{fontWeight:"400"}}>Search for an answer or bowse help topics to create a ticket</h1>
                    <input placeholder="Eg. How do I activate F&O trading?"/>
                    <a href="" >Track account opening</a>
                    <a href="" className="ms-4">Track segment activation</a>
                    <a href="" className="ms-4">Intraday margins</a>
                    <a href="" className="ms-4">Kite user manual</a>
                </div>
                <div className="col-1"></div>
                <div className="col-4 ">
                    <h1 className="fs-4" style={{fontWeight:"400"}}>Featured</h1>
                    <ol>
                        <li><a href="" >Current Takeovers and Delisting - January 2024</a></li>
                        <li><a href="" >Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                </div>
                <div className="col-2"></div>
            </div>
        </section>
     );
}

export default Hero;