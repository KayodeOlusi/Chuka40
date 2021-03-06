const CheckBox = ({ name, toppings, id, onChange, status, image,  ...rest }) => {
    return ( 
            <form className = "checkbox mt-3" onClick = { status === "Available" ? onChange : console.log("no") }>
                <div className = "available">
                    <label htmlFor = { name }>{ name }</label>
                    <input { ...rest } disabled = { status === "Available" ? false : true } onChange = { onChange } type = "radio" name = { name } id = { id } value = { name } className = "the-checkbox"/>
                </div>
                <div className="desc">
                    <div>
                        <p>{ toppings }</p>
                        <p className="status">{ status }</p>
                    </div>
                    <img src = { image } alt = "Food" />
                </div> 
            </form> 
     );
}
 
export default CheckBox;
