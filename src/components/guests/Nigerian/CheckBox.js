const CheckBox = ({ name, toppings, id, onChange, ...rest }) => {
    return ( 
            <form className="checkbox mt-3" onClick={onChange}>
                <div className = "available">
                    <label htmlFor = { name }>{ name }</label>
                    <input { ...rest }  onChange={onChange} type = "checkbox" name = { name } id = { id } value = { name } className = "the-checkbox"/>
                </div>
                <div className="desc">
                    <p>{ toppings }</p>
                    <p> Available </p>
                </div>   
            </form> 
     );
}
 
export default CheckBox;