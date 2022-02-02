const CheckBox = ({ name, toppings, id, ...rest }) => {
    return ( 
            <form className="checkbox mt-3">
                <div className = "available">
                    <label htmlFor = { name }>{ name }</label>
                    <input { ...rest } type = "checkbox" name = { name } id = { id } value = { name } className = "the-checkbox"/>
                </div>
                <div className="desc">
                    <p>{ toppings }</p>
                    <p> Available </p>
                </div>   
            </form> 
     );
}
 
export default CheckBox;