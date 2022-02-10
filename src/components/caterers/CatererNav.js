import { AddShoppingCart, Home, Inventory, Logout } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

const CatererNav = () => {
    const navigate = useNavigate();

    return ( 
        <div className="bottom-nav">
            <Button> <Home onClick = {() => navigate("/caterers/dashboard")} /> </Button>
            <Button> <AddShoppingCart onClick = {() => navigate("/caterers/orders")} /> </Button>
            <Button> <Inventory onClick = {() => navigate("/caterers/store")} /> </Button>
            <Button> <Logout onClick = {() => signOut(auth)} /> </Button>
        </div>
     );
}
 
export default CatererNav;