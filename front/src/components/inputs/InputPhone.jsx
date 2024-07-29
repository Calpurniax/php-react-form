const InputPhone =({ cssStyle, inputStyle, errorStyle, id,  register, errors })=>{
    return(
        <div className={cssStyle}>            
            <input type="tel" className={inputStyle} name={id} id={id} placeholder="Phone*" {...register(id, {
                required:{
                    value:true,
                    message:"This field is required"
                }, 
                maxLength:{
                    value:9,
                    message:`This field should be less than 9 characters`
                },
                pattern:{
                    value:/^[0-9]+$/,
                    message:"This field should contains only numbers"
                },
            })}/>
            
            {errors[id] && (<p className={errorStyle}>{errors[id]?.message}</p>)}
        </div>
    )
}
export default InputPhone