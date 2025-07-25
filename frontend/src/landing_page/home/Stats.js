
function Stats() {
    return ( 
        <div className="container p-5 mt-5">
            <div className="row">
                <div className="col-6">
                  <h2 className="fs-3">Trust with confidence</h2> 
                  <h3 className="fs-4 mt-5">Customer-first always</h3> 
                  <p className="text-muted mt-3">That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

                  <h3 className="fs-4 mt-5">No spam or gimmicks</h3> 
                  <p className="text-muted mt-3">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>

                  <h3 className="fs-4 mt-5">The Zerodha universe</h3> 
                  <p className="text-muted mt-3">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                  <h3 className="fs-4 mt-5">Do better with money</h3> 
                  <p className="text-muted mt-3">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>

                </div>
                <div className="col-6">
                    <img src="media/images/ecosystem.png" style={{width:"100%"}}/>
                    <div className="text-center mt-3">
                        <a href="" className="p-5 fw-semibold text-decoration-none">Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href="" className="fw-semibold text-decoration-none">Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;