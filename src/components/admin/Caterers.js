import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { selectAdmin } from "../../features/adminSlice";
import Bottomnav from "./Bottomnav";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query } from "firebase/firestore";
import CatererDetails from "./CatererDetails";
import { db } from "../../firebase";

const Caterers = () => {
    const navigate = useNavigate();
    const user = useSelector(selectAdmin);
    const [totalCaterers] = useCollection(query(collection(db, "users")));

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
                    totalCaterers?.docs.map(doc => {
                        const { catererName, catererEmail, catererPassword, catererGender, mealsAssigned, catererUid, catererNumber } = doc.data()
                        return (
                            <CatererDetails
                                name = { catererName }
                                email = { catererEmail }
                                password = { catererPassword }
                                gender = { catererGender }
                                meals = { mealsAssigned }
                                uid = { catererUid }
                                number = { catererNumber }
                                key = { catererUid } 
                            />
                        )
                    })
                }
            </div>
            <div className="little-space"></div>
            <Bottomnav />
        </div>
     );
}
 
export default Caterers;