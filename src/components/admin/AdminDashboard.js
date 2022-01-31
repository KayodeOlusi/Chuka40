import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectAdmin } from "../../features/adminSlice";
import AdminDashboardPanel from "./AdminDashboardPanel";

const AdminDashboard = () => {
    const user = useSelector(selectAdmin);
    const navigate = useNavigate();

    useEffect(() => {
        if(!user) {
            navigate("/admin");
        }
    })

    return ( 
        <div className="admin-dashboard">
            <AdminDashboardPanel />
        </div>
     );
}
 
export default AdminDashboard;