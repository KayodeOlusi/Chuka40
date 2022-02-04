import { Avatar } from "@mui/material";

const CatererDetails = ({ name, email, password, gender, uid, meals, number }) => {
    return ( 
        <div className="caterer-details">
            <div className="container">
                <div className="header">
                    <Avatar>{ name[0] }</Avatar>
                    <h6> { name } </h6>
                    <h6>{ email }</h6>
                </div>
                <div className="body">
                    <p>Assigned Meals: { meals }</p>
                    <p>Gender: { gender }</p>
                    <p>Mobile Number: { number }</p>
                    <p>Password: { password }</p>
                </div>
            </div>
        </div>
     );
}
 
export default CatererDetails;