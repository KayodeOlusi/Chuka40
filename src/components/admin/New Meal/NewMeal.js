import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectAdmin } from "../../../features/adminSlice";
import Bottomnav from "../Bottomnav";

const NewMeal = () => {
    const navigate = useNavigate();
    const user = useSelector(selectAdmin);
    useEffect(() => {
        if(!user) {
            navigate("/admin");
        }
    });

    return ( 
        <div className="new-meal">
            <div className="container">
                <div className="header">
                    <h5>Pick a Category</h5>
                </div>
                <div className="category-contents">
                    <div className="nigerian mt-5" onClick = {() => navigate("/create/meal/form")}>
                        <img src="https://keobirestaurant.com/wp-content/uploads/2020/10/Ogbono-Soup.jpg" alt="" />
                        <div className="texts">
                            <h3>Nigerian</h3>
                            <h6 className = "text-secondary">
                                Add a food item to this category
                            </h6>
                        </div>
                    </div>
                    <div className="continental mt-3" onClick = {() => navigate("/create/continental/form")}>
                        <img src="https://guardian.ng/wp-content/uploads/2018/08/Concoction-rice-photo-My-story-time.jpg" alt="" />
                        <div className="texts">
                            <h3>Continental</h3>
                            <h6 className = "text-secondary">
                                Add a food item to this category
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
            <Bottomnav />
        </div>
     );
}
 
export default NewMeal;