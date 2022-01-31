import Image1 from "../../assets/Image1.jpg";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Guest = () => {
    const navigate = useNavigate();

    const showTheModal = () => {
        navigate("/modal");
    }

    return ( 
        <div className = "guest">
            <div className = "container">
                <div className = "homepage">
                    <img src = { Image1 } alt = "guest" className = "homepage-image img-thumbnail img-responsive"  />
                </div>
                <div className="homepage-text">
                    <div className="text-header">
                        <h2 className="text-center">Welcome to Chuka</h2>
                        <h2 className="text-center">
                            @ Big 40!
                        </h2>
                    </div>
                    <div className="text-desc text-center mt-1">
                        <p>We hope you have an amazing time here</p>
                    </div>
                </div>
                <div className="homepage-btn">
                    <Button className="btn homepage-button" onClick = { showTheModal }>
                        Enter Table Number
                    </Button>
                </div>
            </div>
        </div>
     );
    }
 
export default Guest;