import { useNavigate } from "react-router-dom";

const Categories = () => {
    const navigate = useNavigate();

    const toNigerian = () => {
        navigate("/category/nigerian");
    }

    const toContinental = () => {
        navigate("/category/continental");
    }

    return ( 
        <div className = "categories">
            <div className="container">
                <div className="category-header">
                    <h3>Food Categories</h3>
                    <p>Which type of food would you like to eat</p>
                </div>
                <div className="category-contents">
                    <div className="nigerian mt-5" onClick = { toNigerian }>
                        <img src="https://keobirestaurant.com/wp-content/uploads/2020/10/Ogbono-Soup.jpg" alt="" />
                        <div className="texts">
                            <h3>Nigerian</h3>
                            <h6 className = "text-secondary">
                                Select from Nigerian delicacies on the menu
                            </h6>
                        </div>
                    </div>
                    <div className="continental mt-3" onClick = { toContinental }>
                        <img src="https://guardian.ng/wp-content/uploads/2018/08/Concoction-rice-photo-My-story-time.jpg" alt="" />
                        <div className="texts">
                            <h3>Continental</h3>
                            <h6 className = "text-secondary">
                                Select from Continental delicacies on the menu
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Categories;