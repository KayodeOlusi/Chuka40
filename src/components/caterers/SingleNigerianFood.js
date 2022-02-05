import { Skeleton } from "@mui/material";
import { collection, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import CatererNav from './CatererNav'

const SingleNigerianFood = () => {
    const [totalNigerianFood, loading] = useCollection(query(collection(db, "nigerian")));

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
        <div className = "single-nigerian-food-container">
            <div className="container">
                <h6 className = "pt-3 pb-3">Nigerian Meals</h6>
                {
                    totalNigerianFood?.docs.map(doc => (
                        <div className = "single-nigerian-food" key = { doc.id }>
                            <h5>{ doc.data().name }</h5>
                            <h6>{ doc.data().toppings }</h6>
                        </div>
                    ))
                }
            </div>
            <CatererNav />
        </div>
     );
}
 
export default SingleNigerianFood;