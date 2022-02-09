import Default from "../../../assets/Default.jpg";

const CheckBox = ({ name, toppings, id, onChange, status, image,  ...rest }) => {
    return ( 
            <form className = "checkbox mt-3" onClick = { onChange }>
                <div className = "available">
                    <label htmlFor = { name }>{ name }</label>
                    <input { ...rest }  onChange = { onChange } type = "checkbox" name = { name } id = { id } value = { name } className = "the-checkbox"/>
                </div>
                <div className="desc">
                    <div>
                        <p>{ toppings }</p>
                        <p className="status">{ status }</p>
                    </div>
                    <img src = { image } alt = { Default } />
                </div> 
            </form> 
     );
}
 
export default CheckBox;