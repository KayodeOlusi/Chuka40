import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { selectAdmin } from "../../features/adminSlice";
import Bottomnav from "./Bottomnav";

const Caterers = () => {
    const navigate = useNavigate();
    const user = useSelector(selectAdmin);

    useEffect(() => {
        if(!user) {
            navigate("/admin")
        };
    });

    return ( 
        <div className="caterers">
            <div className="container">
                <div className="text-center inner">
                    <div className = "header">
                        <h5>My Caterers</h5>
                    </div>
                    <div className = "admin-caterer-btn">
                        <Button className = "admin-caterer-button" onClick = {() => navigate("/create/caterer")}>Create Caterer</Button>
                    </div>
                </div>
                {
                    
                }
            </div>
            <Bottomnav />
        </div>
     );
}
 
export default Caterers;