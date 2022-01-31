const CheckBox = ({ name, quantity, toppings, id, ...rest }) => {
    return ( 
            <form className="checkbox mt-3">
                <div className = "available">
                    <label htmlFor = { name }>{ name }</label>
                    <input { ...rest } type = "checkbox" name = { name } id = { id } value = { name } />
                </div>
                <div className="desc">
                    <p>{ toppings }</p>
                    <p> Quantity: { quantity } plates left</p>
                </div>   
            </form> 
     );
}
 
export default CheckBox;