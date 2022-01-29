import { useEffect, useState } from "react";

const Update = () => {
    const [success, setSuccess] = useState(true);

    useEffect(() => {
        
    }, [success])

    return ( 
        <div className="update">
            <div className="container">
                <div className="update-header">
                    <h3>
                        Order Status
                    </h3>
                    <p>Stay on this page to monitor your order</p>
                </div>

                <div className="update-status">

                </div>
            </div>
        </div>
     );
}
 
export default Update;