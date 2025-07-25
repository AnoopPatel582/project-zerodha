function LeftSection({imageURL,productName, productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return ( 
        <div className="container p-3 ">
            <div className="row mb-5">
                <div className="col-8 p-3">
                    <img src={imageURL} alt="Product" />
                </div>
                <div className="col-4 mt-5">
                    <h1 className="fs-3 text-muted lh-lg">{productName}</h1>
                    <p className="lh-lg " style={{fontSize:"1.1rem"}}>{productDescription}</p>
                    <div className="text-decoration-none">
                    <a className="text-decoration-none" href={tryDemo}>Try Demo<i class="fa fa-long-arrow-right ms-2" aria-hidden="true"></i></a>
                    <a className="text-decoration-none ms-4" href={learnMore}>Learn More<i class="fa fa-long-arrow-right ms-2" aria-hidden="true"></i></a>
                    </div>
                    <div className="mt-4">
                    <a href={googlePlay}>
                        <img src="media/images/googlePlayBadge.svg" />
                    </a>
                    <a href={appStore} className="ms-4">
                        <img src="media/images/appstoreBadge.svg" />
                    </a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;