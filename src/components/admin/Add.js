import Bottomnav from "./Bottomnav";

const Add = () => {
    return ( 
        <div className="add">
            <div className="container">
                <div className="add-caterer mt-3">
                    Add New Caterer
                </div>
                <div className="add-meal mt-3">
                    Add New Meal
                </div>
            </div>
            <Bottomnav /> 
        </div>
     );
}
 
export default Add;