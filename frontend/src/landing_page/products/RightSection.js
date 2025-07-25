function RightSection({imageURL,productName, productDescription,learnMore}) {
    return ( 
        <div className="container mb-5">
            <div className="row">
                <div className="col-4 mt-5 ">
                    <h1 className="fs-3 text-muted lh-lg">{productName}</h1>
                    <p className="lh-lg " style={{fontSize:"1.1rem"}}>{productDescription}</p>
                    <a className="text-decoration-none" href={learnMore}>Learn More<i class="fa fa-long-arrow-right ms-2" aria-hidden="true"></i></a>
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <img src={imageURL} alt="Product" style={{width:"100%"}}/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;