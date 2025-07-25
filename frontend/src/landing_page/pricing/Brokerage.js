function Brokerage() {
    return ( 
        <div className="container mt-5 p-5">
            <div className="row mb-5 border-top">
                <div className="col-8 mt-5 p-5 text-center">
                    <h4><a href="" className="text-decoration-none ">Brokerage Calculator</a></h4>
                    <ul className="mt-5 text-start text-muted "style={{fontSize:"1.1rem"}}>
                        <li>Call & Trade and RMS auto-squareoff:Additional charges of ₹50+GST per order. </li>
                        <li>Digital contract notes will be sent vie e-mail. </li>
                        <li>For NRI account(not-PIS), 0.5% or ₹100 per executed for equity (whichever is lover). </li>
                        <li>For NRI account(PIS), 0.5% or ₹100 per executed for equity (whichever is lover). </li>
                        <li>If the account is debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per order ixecuted. </li>
                    </ul>
                </div>
                <div className="col-4 mt-5 p-5">
                    <h4><a href="" className="text-decoration-none">List of charges</a></h4>
                </div>
            </div>
        </div>
     );
}

export default Brokerage;