import { Face, Fastfood } from "@mui/icons-material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectAdmin } from "../../features/adminSlice";
import Bottomnav from "./Bottomnav";

const Add = () => {
    const navigate = useNavigate();
    const user = useSelector(selectAdmin);
    useEffect(() => {
        if(!user) {
            navigate("/admin");
        }
    });

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