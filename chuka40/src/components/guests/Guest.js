import Image1 from "../../assets/Image1.jpg";

const Guest = () => {
    return ( 
        <div className = "guest">
            <div className = "container">
                <div className = "homepage">
                    <img src = { Image1 } alt = "" className = "homepage-image img-thumbnail img-responsive"  />
                </div>
                <div className="homepage-text">
                    <div className="text-header">
                        <h2 className="text-center">Welcome to Chuka</h2>
                        <h2 className="text-center">
                            @ Big 40!
                        </h2>
                    </div>
                    <div className="text-desc text-center">
                        <p>We hope you have an amazing time here</p>
                    </div>
                </div>
                <div className="homepage-btn">
                    <div className="btn homepage-button">
                        Get Started
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Guest;