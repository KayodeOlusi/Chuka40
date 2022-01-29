const CheckBox = ({ name, quantity, toppings }) => {
    return ( 
        <div className="checkbox">
            <div className = "available">
                <label htmlFor = { name }>{ name }</label>
                <input type = "checkbox" name = "Jollof" id = "Jollof" value = { name } />
            </div>
            <div className="desc">
                <p>{ toppings }</p>
                <p> Quantity: { quantity } plates left</p>
            </div> 
        </div>
     );
}
 
export default CheckBox;