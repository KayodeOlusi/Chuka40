import { collection, query } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../../firebase';
import CatererNav from './CatererNav';

const CatererStore = () => {
    const [totalNigerianFood] = useCollection(query(collection(db, "nigerian")));
    const [totalContinentalFood] = useCollection(query(collection(db, "continental")));

    return ( 
        <div className="caterer-store">
            <div className="container">
                <div className="details row gy-2">
                    <div className="total-caterers col-6">
                        <div className="inner-total">
                            <h6>Total Food Items</h6>
                            {
                                totalNigerianFood && totalContinentalFood ? <h2>{ totalNigerianFood.docs.length + totalContinentalFood.docs.length }</h2> : <h2>0</h2>
                            }
                        </div>
                    </div>
                    <div className="food-category col-6">
                        <div className="inner-food">
                            <h6>Food Categories</h6>
                            <h2>2</h2>
                        </div>
                    </div>
                </div>
                <div className="details row">
                    <div className="food-menu-items col-6">
                        <div className="inner-menu">
                            <h6>Nigerian Meals</h6>
                            {
                                totalNigerianFood ? <h2>{ totalNigerianFood.docs.length }</h2> : <h2>0</h2>
                            }
                        </div>
                    </div>
                    <div className="total-orders col-6">
                        <div className="inner-order">
                            <h6>Continental Meals</h6>
                            {
                                totalContinentalFood ? <h2>{ totalContinentalFood.docs.length }</h2> : <h2>0</h2>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <CatererNav />
        </div>
     );
}
 
export default CatererStore;