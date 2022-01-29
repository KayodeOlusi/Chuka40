import { Button } from "@mui/material";
import CheckBox from "./CheckBox";
import { db } from "../../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query } from "firebase/firestore";

const Nigerian = () => {
    const q = query(collection(db, "nigerian"))
    const [nigerianDishes] = useCollection(q);

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
                        {
                            nigerianDishes?.docs.map(doc => (
                                <CheckBox
                                     name = { doc.data().name }
                                     key = { doc.id }
                                     id = { doc.id }
                                     quantity = { doc.data().quantity }
                                     toppings = { doc.data().toppings }
                                />
                            ))
                        }
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