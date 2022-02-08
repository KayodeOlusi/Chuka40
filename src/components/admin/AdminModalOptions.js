const AdminModalOptions = ({ name, onChange, ...rest}) => {
    return ( 
            <form className="checkbox mt-3" onClick = { onChange }>
                <div className = "available">
                    <label htmlFor = { name }>{ name }</label>
                    <input { ...rest }  onChange={ onChange } type = "checkbox" name = { name } id = { name } value = { name } className = "the-checkbox"/>
                </div> 
            </form>
     );
}
 
export default AdminModalOptions;