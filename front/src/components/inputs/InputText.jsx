const InputText =({ cssStyle, inputStyle, errorStyle, id, placeholder, register, errors })=>{
    return(
        <div className={cssStyle}>           
            <input type="text" className={inputStyle}name={id} id={id} placeholder={placeholder} {...register(id, {
                required:{
                    value:true,
                    message:"This field is required"
                }, 
                maxLength:{
                    value:80,
                    message:`This field should be less than 80 characters`
                },
                pattern:{
                    value:/^[a-zA-Z]+$/,
                    message:"This field should contains only letters"
                },
            })}/>
             
            {errors[id] && (<p className={errorStyle}>{errors[id]?.message}</p>)}
        </div>
    )
}
export default InputText