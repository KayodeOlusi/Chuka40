import { Skeleton } from "@mui/material";
import { collection, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { useSelector } from "react-redux";
import { selectEditModal } from "../../features/catererSlice";
import { db } from "../../firebase";
import CatererNav from "./CatererNav";
import EditCont from "./EditCont";
import SingleCont from "./SingleCont";

const SingleContinentalFood = () => {
    const [totalContinentalFood, loading] = useCollection(query(collection(db, "continental")));
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
                edit && <EditCont />
            }
            <div className="single-continental-food-container">
                <div className="container">
                    <h6 className = "pt-3 pb-3">Continental Meals</h6>
                    {
                        totalContinentalFood?.docs.map(doc => (
                            <SingleCont
                                name = { doc.data().name }
                                toppings = { doc.data().toppings }
                                id = { doc.id }
                                key = { doc.id }
                            />
                        ))
                    }
                </div>
                <CatererNav />
            </div>
        </>
     );
}
 
export default SingleContinentalFood;