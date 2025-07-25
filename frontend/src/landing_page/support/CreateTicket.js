function CreateTicket() {
    return (
        <div className="container">
            <div className="row p-5">
                <h3>To Create a ticket, please select a relevant topic</h3>
                <div className="col-4 mt-3">
                    <h4 className="fs-4"><i class="fa fa-plus-circle m-3" aria-hidden="true"></i>Account Opening</h4>
                    <ul style={{ fontSize: "1.1rem" }}>
                        <li><a href="" className="text-decoration-none lh-lg" >Resident individual</a></li>
                        <li><a href="" className="text-decoration-none lh-lg">Minor</a></li>
                        <li><a href="" className="text-decoration-none lh-lg">Non Resident Indian (NRI)</a></li>
                        <li><a href="" className="text-decoration-none lh-lg">Company, Partnership, HUF and LLP</a></li>
                        <li><a href="" className="text-decoration-none lh-lg">Glossary</a></li>
                    </ul>
                </div>
                <div className="col-4 mt-3">
                    <h4 className="fs-4"><i class="fa fa-user-circle m-3" aria-hidden="true"></i>Your Zerodha Account</h4>
                    <ul style={{ fontSize: "1.1rem" }}>
                        <li><a href="" className="text-decoration-none lh-lg">Your Profile</a></li>
                        <li><a href="" className="text-decoration-none lh-lg">Account modification</a></li>
                        <li><a href="" className="text-decoration-none lh-lg">Client Master Report (CMR) and Depository Participant (DP)</a></li>
                        <li><a href="" className="text-decoration-none lh-lg">Nomination</a></li>
                        <li><a href="" className="text-decoration-none lh-lg">Transfer and conversion of securities</a></li>
                    </ul>
                </div>
                <div className="col-4 mt-3">
                    <h4 className="fs-4"><i class="fa fa-pause-circle-o m-3" aria-hidden="true"></i>Kite</h4>
                    <ul style={{ fontSize: "1.1rem" }}>
                        <li><a href="" className="text-decoration-none lh-lg">IPO</a></li>
                        <li><a href="" className="text-decoration-none lh-lg">Trading FAQs</a></li>
                        <li><a href="" className="text-decoration-none lh-lg">Margin Trading Facility (MTF) and Margins</a></li>
                        <li><a href="" className="text-decoration-none lh-lg">Charts and orders</a></li>
                        <li><a href="" className="text-decoration-none lh-lg">Alerts and Nudges</a></li>
                        <li><a href="" className="text-decoration-none lh-lg">General</a></li>
                    </ul>
                </div>
            </div>
            <div className="row p-5">

                <div className="col-4 mt-3">
                    <h4 className="fs-4"><i class="fa fa-usd m-3" aria-hidden="true"></i>Funds</h4>
                    <ul style={{ fontSize: "1.1rem" }}>
                        <li><a href="" className="text-decoration-none lh-lg">Add money</a></li>
                        <li><a href="" className="text-decoration-none lh-lg">Withdraw money</a></li>
                        <li><a href="" className="text-decoration-none lh-lg">Add bank accounts</a></li>
                        <li><a href="" className="text-decoration-none lh-lg">eMandates</a></li>
                    </ul>
                </div>
                <div className="col-4 mt-3">
                    <h4 className="fs-4"><i class="fa fa-gg-circle m-3" aria-hidden="true"></i>Console</h4>
                    <ul style={{ fontSize: "1.1rem" }}>
                        <li><a href="" className="text-decoration-none lh-lg">Portfolio</a></li>
                        <li><a href="" className="text-decoration-none lh-lg">Corporate actions</a></li>
                        <li><a href="" className="text-decoration-none lh-lg">Funds statement</a></li>
                        <li><a href="" className="text-decoration-none lh-lg">Reports</a></li>
                        <li><a href="" className="text-decoration-none lh-lg">Profile</a></li>
                        <li><a href="" className="text-decoration-none lh-lg">Segments</a></li>
                    </ul>
                </div>
                <div className="col-4 mt-3">
                    <h4 className="fs-4"><i class="fa fa-connectdevelop m-3" aria-hidden="true"></i>Coin</h4>
                    <ul style={{ fontSize: "1.1rem" }}>
                        <li><a href="" className="text-decoration-none lh-lg">Mutual funds</a></li>
                        <li><a href="" className="text-decoration-none lh-lg">National Pension Scheme (NPS)</a></li>
                        <li><a href="" className="text-decoration-none lh-lg">Fixed Deposit (FD)</a></li>
                        <li><a href="" className="text-decoration-none lh-lg">Features on Coin</a></li>
                        <li><a href="" className="text-decoration-none lh-lg">Payments and Orders</a></li>
                        <li><a href="" className="text-decoration-none lh-lg">General</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;