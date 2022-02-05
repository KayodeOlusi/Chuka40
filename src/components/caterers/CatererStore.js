import { collection, query } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import CatererNav from './CatererNav';

const CatererStore = () => {
    const [totalNigerianFood] = useCollection(query(collection(db, "nigerian")));
    const [totalContinentalFood] = useCollection(query(collection(db, "continental")));
    const navigate = useNavigate();

    return ( 
        <div className="caterer-store">
            <div className="container">
                <div className="details row">
                    <div className="total-caterers col-6">
                        <div className="inner-total" onClick = {() => navigate("/nigerian")}>
                            <h6>Nigerian Meals</h6>
                            {
                                totalNigerianFood ? <h2>{ totalNigerianFood.docs.length }</h2> : <h2>0</h2>
                            }
                        </div>
                    </div>
                    <div className="food-category col-6">
                        <div className="inner-food" onClick = {() => navigate("/continental")}>
                            <h6>Continental Meals</h6>
                            {
                                totalContinentalFood ? <h2>{ totalContinentalFood.docs.length }</h2> : <h2>0</h2>
                            }
                        </div>
                    </div>
                </div>
                <p className = "mt-3 lead">Click to see all items under the category</p>
            </div>
            <CatererNav />
        </div>
     );
}
 
export default CatererStore;