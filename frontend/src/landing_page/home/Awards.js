
function Awards() {
    return ( 
        <div className="container ">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="media/images/largestBroker.svg"  />
                </div>
                <div className="col-6 p-5">
                    <h1>
                        Largest Stock Broker in India
                    </h1>
                    <p className="mb-5 ">
                        2+ million Zerodha clients contribute to over 15% of the daily retail volume in the Indian stock market.
                    </p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li className="p-1">
                                    Fututre & Options
                                </li>
                                <li className="p-1">
                                    Commodity derivatives
                                </li>
                                <li className="p-1">
                                    Currency derivatives
                                </li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li className="p-1">
                                    Stocks & IPOs
                                </li>
                                <li className="p-1">
                                    Direct Mutual Funds
                                </li>
                                <li className="p-1">
                                    Bonds & Government Securities
                                </li>
                            </ul>
                        </div>                 
                    </div>
                    <img src="media/images/pressLogos.png" style={{width:"90%"}}/>
                </div>
            </div>
        </div>
     );
}

export default Awards;