import { Face, Fastfood } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Bottomnav from "./Bottomnav";

const Add = () => {
    const navigate = useNavigate();

    return ( 
        <div className="add">
            <div className="container">
                <div className="texts">
                    <h5>Add To The Categories Below</h5>
                </div>
                <div className="add-caterer mt-3" onClick = {() => navigate("/create/caterer")}>
                    <Face /> Add New Caterer
                </div>
                <div className="add-meal mt-3" onClick={() => navigate("/create/meal")}>
                    <Fastfood /> Add Food Item
                </div>
            </div>
            <Bottomnav /> 
        </div>
     );
}
 
export default Add;