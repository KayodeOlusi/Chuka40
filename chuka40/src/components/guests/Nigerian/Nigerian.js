import { Button } from "@mui/material";

const Nigerian = () => {
    return ( 
        <div className = "nigeria">
            <div className="container">
                <div className="nigeria-header">
                    <h3>
                        Nigerian Delicacies
                    </h3>
                    <p>Please select a food from the menu</p>
                </div>
                <div className="nigerian-meals">
                    <form>
                        <div className = "meals-list">
                            <label htmlFor="Jollof">Jollof Rice</label>
                            <input type="checkbox" id = "Jollof" name = "Jollof" value = "Jollof Rice" />
                        </div>
                        <div className = "meals-list">
                            <label htmlFor="Fried">Fried Rice</label>
                            <input type="checkbox" id = "Fried" name = "Fried" value = "Fried Rice" />
                        </div>
                        <div className="meal-btn text-center">
                            <Button type = "submit" className = "meals-button">
                                Add to food tray
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Nigerian;