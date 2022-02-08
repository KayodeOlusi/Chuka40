import { Skeleton } from "@mui/material";
import { collection, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { useSelector } from "react-redux";
import { selectEditModal } from "../../features/catererSlice";
import { db } from "../../firebase";
import CatererNav from './CatererNav'
import Edited from "./Edited";
import EditModal from "./EditModal";

const SingleNigerianFood = () => {
    const [totalNigerianFood, loading] = useCollection(query(collection(db, "nigerian")));
    const edit = useSelector(selectEditModal);

    if(loading) {
        return (
            <div className = "loader">
                <div className = "container mt-3">
                    <Skeleton />
                    <Skeleton animation = "wave" />
                    <Skeleton animation = "wave" />
                    <Skeleton animation = "wave" />
                    <Skeleton animation = "wave" />
                </div>
                <div className = "container mt-3">
                    <Skeleton />
                    <Skeleton animation = "wave" />
                    <Skeleton animation = "wave" />
                    <Skeleton animation = "wave" />
                    <Skeleton animation = "wave" />
                </div>
                <div className = "container mt-3">
                    <Skeleton />
                    <Skeleton animation = "wave" />
                    <Skeleton animation = "wave" />
                    <Skeleton animation = "wave" />
                    <Skeleton animation = "wave" />
                </div>
                <div className="meal-btn text-center bg-danger"> 
                <CatererNav />
            </div>
            </div>
        )
    }

    return ( 
        <>
            {
                edit && <EditModal />
            }
            <div className = "single-nigerian-food-container">
                <div className="container">
                    <h6 className = "pt-3 pb-3">Nigerian Meals</h6>
                    {
                        totalNigerianFood?.docs.map(doc => (
                            <Edited
                                name = { doc.data().name }
                                toppings = { doc.data().toppings }
                                key = { doc.id }
                                id = { doc.id }
                            />
                        ))
                    }
                </div>
                <CatererNav />
            </div>
        </>
     );
}
 
export default SingleNigerianFood;