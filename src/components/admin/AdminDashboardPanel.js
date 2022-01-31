import { Button } from "@mui/material";

const AdminDashboardPanel = () => {
    const addCaterer = () => {

    }

    return ( 
        <div className="admin-dashboard-panel">
            <div className="container">
                <div className="admin-dashboard-header">
                    <h3>Hello Admin</h3>
                </div>
                <div className="row row1 g-2">
                    <div className="number-of-caterers col-lg-6 col-md-6 col-sm-6">
                        <h4>Total Caterers</h4>
                        <p>12</p>
                    </div>
                    <div className="food-categories col-lg-6 col-md-6 col-sm-6">
                        <h4>Food Categories</h4>
                        <p>02</p>
                    </div>
                </div>
                <div className="row row2 g-2">
                    <div className="food-menu-items col-lg-6 col-md-6 col-sm-6">
                        <h4>Food Menu Items</h4>
                        <p>22</p>
                    </div>
                    <div className="total-orders col-lg-6 col-md-6 col-sm-6">
                        <h4>Total Orders</h4>
                        <p>57</p>
                    </div>
                </div>
                <div className="admin-add-btn text-center">
                    <Button onClick = { addCaterer } className = "admin-btn" >
                        Create Caterer
                    </Button>
                </div>
            </div>
        </div>
     );
}
 
export default AdminDashboardPanel;